import React from 'react';

const SearchBox = ({ placeholder, onChange }) => {
    return (
        <input
            type="text"
            name="query"
            className="form-control my-3"
            placeholder={placeholder}
            onChange={e => onChange(e.currentTarget.value)}
        />
    );
}

export default SearchBox;