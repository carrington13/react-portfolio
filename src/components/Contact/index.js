import React, { useState } from 'react';
//import emailjs from 'emailjs-com';


function Contact () {

    const [formState, setFormState] = useState({name: '', email: '', message: ''})

    // update state based on form input changes
    const handleChange = event => {
        const { name, value } = event.target;

        setFormState({
        ...formState,
        [name]: value
        });
    };

    // Add emailjs-com for form functionality
    // https://www.emailjs.com/docs/examples/reactjs/
    const handleFormSubmit = async event => {
        event.preventDefault();
      // service name = Gmail, serviceid=service_qyrln3k, template id = template_cut1itu
        // emailjs.sendForm('service_qyrln3k', 'template_cut1itu', event.target, 'user_6FZFUHcR321tuT9EQn8es')
        //   .then((result) => {
        //     console.log(result.text);
        //   }, (error) => {
        //     console.log(error.text);
        //   })
        setFormState({name: '', email: '', message: ''})
    }
    return (
        <div className="flex-row justify-center mb-4">
        <div className="col-12 col-md-6">
          <div className="card">
            <h4 className="card-header">Contact me!</h4>
            <div className="card-body">
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input col-12 col-md-9"
                  placeholder="Your name"
                  name="name"
                  type="name"
                  id="name"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="form-input col-12 col-md-9"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <textarea
                  className="form-input col-12 col-md-9"
                  placeholder="Your message"
                  name="message"
                  id="message"
                  value={formState.message}
                  onChange={handleChange}
                />
                <button className="btn col-12 col-md-3 text-light bg-dark" type="submit">
                  Submit
                </button>
              </form>
            {/* <form className="contact-form" onSubmit={handleFormSubmit}>
              <input type="hidden" name="contact_number" />
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form> */}
  
            </div>
          </div>
        </div>
      </div>

    );
}



export default Contact