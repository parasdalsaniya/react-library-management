import Joi from 'joi-browser';
import React from 'react';
import Form from './common/form';

class ImportBook extends Form {

    state = {
        data: { name: '', email: '' },
        errors: {}
    }

    schema = {
        name: Joi.string().required().label('Name'),
        email: Joi.string().email().required().label('Email')
    }

    doSubmit = () => {
        console.log("Submitted")
    }

    render() {

        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("name", "Name")}
                    {this.renderInput("email", "Email", "email")}
                    {this.renderButton('Submitt')}
                </form>
            </React.Fragment>
        );
    }
}

export default ImportBook;


// console.log(result)
        // const errors = {};
        // const { data } = this.state
        // if (data.name === '')
        //     errors.name = 'Name is required'
        // if (data.email === '')
        //     errors.email = 'Email is required'
        // return Object.keys(errors).length === 0 ? null : errors;

/* <InputField
                        name="email"
                        label="Email"
                        onChange={this.handleChange}
                        value={data.email}
                        error={errors.email}
                    /> */