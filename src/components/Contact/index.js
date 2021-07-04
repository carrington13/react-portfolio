import React, { useState } from 'react';
import { Form, FormField, TextInput, TextArea, Box, Button} from 'grommet'


function Contact () {

    const [formValue, setFormValue] = useState({})
    return (
        <Form
            value={formValue}
            onChange={nextValue => setFormValue({nextValue})}
            onReset={() => setFormValue({})}
            // To Do something Later
            validate="blur"
            onSubmit={({ formValue }) => {
                console.log(formValue);
            }}
        >
            <FormField name="name" htmlFor="name-input" label="Name:">
                <TextInput id="name-input" name="name" />
            </FormField>
            <FormField name="email" htmlFor="email-input" label="Email:">
                <TextInput id="email-input" name="email" />
            </FormField>
            <FormField name="message" htmlFor="message-input" label="Message:" >
                <TextArea id="message-input" name="message" />
            </FormField>
            <Box direction="row" gap="medium">
                <Button type="submit" primary label="Submit" />
                <Button type="reset" label="Reset" />
            </Box>

        </Form>
    );
}



export default Contact