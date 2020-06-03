import React, { Component } from 'react'
import propTypes from 'prop-types';
import './List.css';


class Form extends Component {
    constructor(){
        super();
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    static propTypes={
        addContact:propTypes.func,
    };

state={
    name:'',
    phone:''
};

onChange (e){
    this.setState({
        [e.target.name] : e.target.value
    })
}

onSubmit (e){
    e.preventDefault();
   this.props.addContact({
       ...this.state
   })
   this.setState({
       name:'',
       phone:''
   })
}


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input name="name" id="name" value={this.state.name} onChange={this.onChange} placeholder="Ente a name"></input>
                    <br/>
                    <input name="phone" id="phone" value={this.state.phone} onChange={this.onChange} placeholder="Ente a phone"></input>
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default Form;
