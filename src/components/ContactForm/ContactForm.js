import React from "react";

const ContactForm = ({ title, name, onChangeInput}) => (
    <>
        <h1 className="title">{title}</h1>
        <input
            type="text"
            name="name"
            value={name}
            onChange={onChangeInput}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
        />
        <button className="contact-button" type="button">Add to contact</button>
    </>
);

export default ContactForm;
