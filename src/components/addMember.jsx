import Joi from 'joi-browser';
import React from 'react';
import Form from './common/form';
// import config from '../config.json';
// import http from '../services/httpService';

class AddMember extends Form {
    state = {
        data: { name: '', email: '' },
        errors: {}
    };

    schema = {
        name: Joi.string().required().label('Name'),
        email: Joi.string().email().required().label('Email')
    }

    doSubmit = () => {
        // const { data } = this.state
        // const obj = { name: data.name, email: data.email }
        // const { data: member } = await http.post(config.apiEndpoint, obj)
        console.log("Submitted")
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.renderInput("name", "Name")}
                {this.renderInput("email", "Email", "email")}
                {this.renderButton('Submitt')}
            </form>
        );
    }
}

export default AddMember;


// validateProperty = (input, value) => {
//     if (input === 'name') {
//         if (value === '') return 'Name is required'
//     }
//     if (input === 'email') {
//         if (value === '') return 'Email is required'
//     }
// }
// validate = () => {
//     // return { name: "name is required" }
//     const errors = {}
//     const { name, email } = this.state;
//     if (name === '')
//         errors.name = "Name is required."
//     if (email === '')
//         errors.email = "Password is required."

//     return Object.keys(errors).length === 0 ? null : errors;
// };

   // validate = () => {
    //     const result = Joi.validate(this.state, this.schema, { abortEarly: false })
    //     console.log(result)
    // }

    // handleChange = (event) => {
    //     this.setState({ [event.target.id]: event.target.value })
    // };

    // handleSubmit = async (event) => {
    //     event.preventDefault();
    //     const errors = this.validate();
    //     this.setState({ errors: errors || {} })
    //     console.log(errors)
    //     // const obj = { name: this.state.name, email: this.state.email }
    //     // const { data: member } = await http.post(config.apiEndpoint, obj)
    //     // console.log(member);
    // };
