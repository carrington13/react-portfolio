import React, { useState } from 'react';


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

    const handleFormSubmit = async event => {
        event.preventDefault();
        setFormState({name: '', email: '', message: ''})
    }
    return (
        <main className="flex-row justify-center mb-4">
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
                  value={formState.username}
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
  
            </div>
          </div>
        </div>
      </main>

    );
}



export default Contact