import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import { Form, FormField, TextInput, TextArea, Box, Button} from 'grommet';
import './style.css'



function Contact () {
    const [formState, setState] = useState({name: '', email: '', message: ''});


    // // Add emailjs-com for form functionality
    // // https://www.emailjs.com/docs/examples/reactjs/
    const handleFormSubmit = async e => {
        e.preventDefault();
      // service name = Gmail, serviceid=service_qyrln3k, template id = template_cut1itu
        emailjs.sendForm('service_qyrln3k', 'template_bwh6bwo', e.target, 'user_6FZFUHcR321tuT9EQn8es')
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });

        setState({name: '', email: '', message: ''})
    }
    return (
      <section>
        <div className="flex-row justify-space-between">
          <div className="contact-header-container">
            <h2 className="contact-heading">
              Contact Me
            </h2>
          </div>
        </div>
        <Box pad="large" background="#F5F0F6" className="contact-form"
        border={{color: "#1C0F13", size:"medium", style: "solid", side: "all"}}
        >
          <Form
            value={formState}
            onChange={nextValue => setState(nextValue)}
            onReset={() => setState({name: '', email: '', message: ''})}
            onSubmit={handleFormSubmit}
      
            
          >
            <FormField className="formField" name="name" htmlFor="text-input-id" label="Name:" required={true} pad={true} validate={{
                regexp: new RegExp(/^[a-zA-Z]{1,50}$/), message: "Name must be less than 50 alphabetical characters"}}>
              <TextInput id="text-input-id" name="name" />
            </FormField>
            <FormField className="formField" name="email" htmlFor="text-email-id" label="Email:" required={true} pad={true} validate={{
                regexp: new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/), message: "Please enter a valid email address"}}>
              <TextInput id="text-email-id" name="email" />
            </FormField>
            <FormField className="formField" name="message" htmlFor="text-message-id" label="Message:" required={true} pad={true} validate={{
                regexp: new RegExp(/^.{1,340}$/), message: "Messages must be shorter than 500 characters"}}>
              <TextArea  id="text-message-id" name="message" />
            </FormField>
            <Box direction="row" gap="medium" className="justify-content-between" >
              <Button type="submit" primary label="Submit" color="#E57A44"/>
              <Button type="reset" label="Reset" color="#E57A44"/>
            </Box>
          </Form>
        </Box>
      </section>
    );
}



export default Contact