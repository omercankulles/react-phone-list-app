import React, { Component } from 'react'
import propTypes from 'prop-types';

import List from './List'
import Form from './Form'

class Contacts extends Component {
    static propTypes={
        addContact:propTypes.func,
    };
    

    render() {
        return (
            <div>
            <Form addContact = {this.props.addContact}/>
            <List contacts={this.props.contacts}/>
            </div>
        )
    }
}

export default Contacts;
