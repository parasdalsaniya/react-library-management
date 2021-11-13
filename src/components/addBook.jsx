import React from 'react';
// import axios from 'axios';
import Form from './common/form';
import Joi from 'joi-browser';
// import Joi from 'joi';
// import http from '../services/httpService';
// import config from '../config.json';

class AddBook extends Form {
    state = {
        data: {
            title: 's', author: 's', average_rating: 0,
            language_code: 's', num_pages: 0, ratings_count: 0,
            text_reviews_count: 0, publisher: 's', isbn: 's',
            isbn13: 's', stock: 0, price: 0
        },
        errors: {}
    };

    schema = {
        title: Joi.string().required().label('Title'),
        author: Joi.string().required().label('Authors'),
        average_rating: Joi.number().required().min(0).max(10).label('Average Rating'),
        language_code: Joi.string().required().label('Language Code'),
        num_pages: Joi.number().required().min(0).label('Num Pages'),
        ratings_count: Joi.number().required().min(0).max(10).label('Ratings Count'),
        text_reviews_count: Joi.number().required().min(0).max(10).label('Text Reviews Count'),
        publisher: Joi.string().required().label('Publisher'),
        isbn: Joi.string().required().label('Isbn'),
        isbn13: Joi.string().required().label('Isbn13'),
        stock: Joi.number().required().min(0).label('Stock'),
        price: Joi.number().required().min(0).label('Price'),
    }

    doSubmit = async () => {
        console.log("add bookk")
        // const { data: member } = await axios.post('http://127.0.0.1:5000/demo', this.state.data)
        // console.log(member);
    };

    render() {
        // const { book } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                {this.renderInput("title", "Title")}
                {this.renderInput("author", "Authors")}
                {this.renderInput("average_rating", "Average Rating")}
                {this.renderInput("language_code", "Language Code")}
                {this.renderInput("num_pages", "Num Pages")}
                {this.renderInput("ratings_count", "Ratings Count")}
                {this.renderInput("text_reviews_count", "Text Reviews Count")}
                {this.renderInput("publisher", "Publisher")}
                {this.renderInput("isbn", "Isbn")}
                {this.renderInput("isbn13", "Isbn13")}
                {this.renderInput("stock", "Stock")}
                {this.renderInput("price", "Price")}
                {this.renderButton('Submitt')}
            </form>
        );
    }
}

export default AddBook;

// 
/* {this.state.bookInfo.map(b => (
                    <InputField
                        name={b}
                        label={b}
                        onChange={this.handleChange}
                        value={b}
                    />
                ))} */
// fields: [
        //     { name: 'Book ID', id: 'bid' },
        //     { name: 'Title', id: 'title' },
        //     { name: 'Authors', id: 'authors' },
        //     { name: 'Average Rating', id: 'average_rating' },
        //     { name: 'Language Code', id: 'language_code' },
        //     { name: 'Num Pages', id: 'num_pages' },
        //     { name: 'Ratings Count', id: 'ratings_count' },
        //     { name: 'Text Reviews Count', id: 'text_reviews_count' },
        //     { name: 'Publisher', id: 'publisher' },
        //     { name: 'Isbn', id: 'isbn' },
        //     { name: 'Isbn13', id: 'isbn13' },
        //     { name: 'Stock', id: 'stock' },
        //     { name: 'Price', id: 'price' }
        // ]

/* <InputField id="title" label="Title" onChange={this.handleChange} value={this.state.title} />
    <InputField id="author" label="Author" onChange={this.handleChange} value={this.state.author} />
    <InputField id="average_rating" label="Average Rating" onChange={this.handleChange} value={this.state.average_rating} />
    <InputField id="language_code" label="Language Code" onChange={this.handleChange} value={this.state.language_code} />
    <InputField id="num_pages" label="Num Pages" onChange={this.handleChange} value={this.state.num_pages} />
    <InputField id="ratings_count" label="Ratings Count" onChange={this.handleChange} value={this.state.ratings_count} />
    <InputField id="text_reviews_count" label="Text Reviews Count" onChange={this.handleChange} value={this.state.text_reviews_count} />
    <InputField id="publisher" label="Publisher" onChange={this.handleChange} value={this.state.publisher} />
    <InputField id="isbn" label="Isbn" onChange={this.handleChange} value={this.state.isbn} />
    <InputField id="isbn13" label="Isbn13" onChange={this.handleChange} value={this.state.isbn13} />
    <InputField id="stock" label="Stock" onChange={this.handleChange} value={this.state.stock} />
    <InputField id="price" label="Price" onChange={this.handleChange} value={this.state.price} /> */