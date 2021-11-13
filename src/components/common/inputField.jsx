import React from 'react';

const InputField = ({ name, label, error, ...rest }) => {
    return (
        <div className="form-group">
            <label
                htmlFor={name}
                className="form-label"
            >
                {label}
            </label>
            <input
                {...rest}
                id={name}
                name={name}
                placeholder={label}
                className="form-control"
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
}

export default InputField;