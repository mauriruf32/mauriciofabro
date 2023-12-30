import React from 'react';
import { useForm, ValidationError } from '@formspree/react'
import "./Contact.css"
import { SocialMedia } from '../../Components/SocialMedia/SocialMedia';
import { Button } from 'react-bootstrap';


const Contact = () => {
    const [state, handleSubmit] = useForm("xnqkeken");

  if (state.succeeded) {
      return <p>Gracias! Estaremos en contacto</p>;
  }

  return (
    <section className="contact contact_container" >
<form onSubmit={handleSubmit} className='form'>
            <h2>Contacto</h2>
      <label htmlFor="name">
        Nombre
      </label>
      <input
        id="name"
        type="text" 
        name="name"
      />
      <label htmlFor="email">
        Email
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <br />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <Button className="button2" type="submit" disabled={state.submitting}>
        Enviar
      </Button>
    </form>
    <br />
    <SocialMedia />
    </section>
  );
}

export default Contact;
