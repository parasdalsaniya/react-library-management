import React, { Component } from 'react';
import Joi from 'joi-browser';
import InputField from './inputField';
class Form extends Component {

    state = {
        data: {},
        errors: {}
    }

    validate = () => {
        const option = { abortEarly: false }
        const { error } = Joi.validate(this.state.data, this.schema, option)

        if (!error) return null
        const errors = {};
        for (let item of error.details)
            errors[item.path[0]] = item.message;
        return errors
    }

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value }
        const schema = { [name]: this.schema[name] }
        const { error } = Joi.validate(obj, schema)
        return error ? error.details[0].message : null;

    }

    handleSubmit = (event) => {
        event.preventDefault()

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if (errors) return;

        this.doSubmit();
    }


    handleChange = ({ target: input }) => {
        const errors = { ...this.state.errors }
        const errorMessage = this.validateProperty(input)
        if (errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name]

        const data = { ...this.state.data };
        data[input.name] = input.value;

        this.setState({ data, errors });
        // this.setState({ [event.target.id]: event.target.value })
    }

    renderButton(label) {
        return (
            <button
                // disabled={this.validate()}
                className="btn btn-dark mt-4"
            >
                {label}
            </button>
        )
    }

    renderInput(name, lable, type = "text") {
        const { data, errors } = this.state;
        return (
            <InputField
                type={type}
                name={name}
                value={data[name]}
                label={lable}
                onChange={this.handleChange}
                error={errors[name]}
            />
        )
    }
}

export default Form;