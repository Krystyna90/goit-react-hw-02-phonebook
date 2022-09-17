import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";

class App extends Component{

state = {
   contacts: [],
   name: ''
   }
    
    formSubmitHandler = data => {
        this.state.contacts.push(data.name);
    };
    

    render() {
        return (
<>
            <ContactForm onSubmit={this.formSubmitHandler}></ContactForm>
            <ContactList contacts={this.state.contacts}></ContactList>
            </>    
    )
    }
}

export default App;