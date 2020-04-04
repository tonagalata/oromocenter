import React from "react";
import ContactForm from '../../components/ContactForm/ContactForm'

const ContactPage = props => {
  return (
    <>
      <div className="container">
        <h3 className="center">Contact</h3>
        <ContactForm/>
      </div>
    </>
  );
};

export default ContactPage;
