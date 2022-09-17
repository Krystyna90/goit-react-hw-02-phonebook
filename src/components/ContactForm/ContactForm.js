import React, {Component} from "react";

class ContactForm extends Component {
    
    state = {
        name: '',
    };

    handleInputChange = e => { 
        this.setState({
            [e.currentTarget.name]:e.currentTarget.value,
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({
             name: '',
        })
    }

    render() {
        
   return(
   <form onSubmit ={this.handleSubmit}>
           <label>
               Name
        <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
               />
               </label>
        <button className="contact-button" type="submit">Add to contact</button>
            </form>
   )
         }
};

export default ContactForm;
