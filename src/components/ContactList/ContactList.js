import React from "react";
import { nanoid } from "nanoid";
import ContactListItem from "./ContactListItem";


const ContactList = ({ contacts }) => {
   return ( <div>
                
        <h1 className="title">Contacts</h1>
        <ul className="contact-list">
            {contacts.map(contact => (<ContactListItem name={contact} id={nanoid()}></ContactListItem>))}
        </ul>
          
    </div>
   )
};

export default ContactList;