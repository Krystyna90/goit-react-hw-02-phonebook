import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";

class App extends Component{

  state = {
  contacts: [],
  name: ''
  }
    
    handleInputChange =(event) =>{ 
        this.setState({
            name: event.currentTarget.value,
        })
    }

    render() {
        return (
            <div className="phonebook">
            <ContactForm title="Name" name={this.state.name} onChangeInput={this.handleInputChange}></ContactForm>
            <ContactList></ContactList>
                </div>
    )
    }
}

export default App;