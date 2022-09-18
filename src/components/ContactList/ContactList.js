import React from "react";

const ContactList = ({ contacts}) => {
   return ( <div>
                
        <h1 className="title">Contacts</h1>
        <ul className="contact-list">
           {contacts.map(contact => (
              <li key={contact.id}>{contact.name} : {contact.number}</li>
            ))}
        </ul>
          
    </div>
   )
};

export default ContactList;