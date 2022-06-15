import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  // set up a state to handle error for the form
  const [errorMessage, setErrorMessage] = useState('');

  //to sync the form data with the component's state, we will use the useState hook. Here we initialized the calues for the form
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  // destructure the form state to be used in the form
  const { name, email, message } = formState;

  // function to sync the internal state of the formState with the user input from the DOM
  function handleChange(e) {
    // verify the email value
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);

      // isValid condition statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
      // verify the name/message value
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    // if there are no errors with the input fields, update the form state
    if (!errorMessage) {
      // take the "e.target.name" field value and assign it to formState.[e.target.name]. The spread operator is used to retain the other key-value pairs in the object.
      // without it, formState would lose the other 2 values and be overwritten with just "e.target.name" (e.target.name is the name attribute of the input field)
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
  // console.log(formState);

  // handle submission of the form
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
    // code to submit the form
  }

  return (
    <section>
      <h1>Contact me</h1>
      <form id='contact-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          {/* the "onChange" event listener will fire "handleChange" each time a keystroke is pressed */}
          {/* instead, we use an "onBlur" to only fire once the user has changed focus outside of the text box */}
          <input
            type='text'
            name='name'
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor='email'>Email address:</label>
          <input
            type='email'
            name='email'
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor='message'>Message:</label>
          <textarea
            name='message'
            rows='5'
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {/* if there is an error message, add the message below the text area. same as using an if statement */}
        {errorMessage && (
          <div>
            <p className='error-text'>{errorMessage}</p>
          </div>
        )}
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
