import React from 'react';
import { useForm, ValidationError } from '@formspree/react'
import "./Contact.css"
import { useTranslation } from 'react-i18next';


const Contact = () => {
    const [state, handleSubmit] = useForm("xnqkeken");
    const [ t ] = useTranslation("global");

  if (state.succeeded) {
      return <p>Gracias! Estaremos en contacto</p>;
  }

  return (
    <section className="contact contact_container" >
<form onSubmit={handleSubmit} className='form'>
            <h2>{t(`contact.title`)}</h2>
      <label htmlFor="name">
      {t(`contact.name`)}
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
      <button className="button2" type="submit" disabled={state.submitting}>
      {t(`buttons.buttons_contact`)}
      </button>

    </form>
    </section>
  );
}

export default Contact;
