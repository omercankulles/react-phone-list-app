import React, { Component } from 'react';
import './App.css';
import Contacts from './Components/Contacts'



class App extends Component {

  constructor(props){
    super(props);
    this.addContact = this.addContact.bind(this);
  }


  state={
    contacts:[
    {
        name : 'Ömer',
        phone :'11111'
    },
    {
        name : 'Kübra',
        phone :'22222'
    },
    {
        name : 'Hüseyin',
        phone :'33333'
    },
]
};


  addContact(contact){
    const {contacts} = this.state;
    contacts.push(contact);

    this.setState({
      contacts
    })
  }

  render(){

  return (
    <div className="App">

      <Contacts addContact={this.addContact} contacts={this.state.contacts}/>

    </div>
  );
}
}


export default App;
