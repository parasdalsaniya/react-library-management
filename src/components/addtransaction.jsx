import Joi from 'joi-browser';
import React from 'react';
import Form from './common/form';

class AddTransaction extends Form {

    state = {
        data: {
            start_date: '', end_date: '',
            deadline: '', status: 'fsrs', amount: 0
        },
        errors: {},
        members: [{ mid: 1 }, { mid: 2 }, { mid: 3 }, { mid: 4 }],
        books: [{ bid: 1 }, { bid: 2 }, { bid: 3 }, { bid: 4 }],
        mid: '', bid: ''

    };

    // componentDidMount() {
    //     const { data: books } = await axios.get('http://127.0.0.1:5000/book');
    //     const { data: members } = await axios.get('http://127.0.0.1:5000/member');
    //     this.setState({ members, books })
    //     console.log(members, books)
    // }

    schema = {
        mid: Joi.number().required().label('Member ID'),
        bid: Joi.number().required().label('Book ID'),
        start_date: Joi.required().label('Start Date'),
        end_date: Joi.required().label('End Date'),
        deadline: Joi.required().label('Deadline'),
        status: Joi.string().required().label('Status'),
        amount: Joi.number().required().label('Amount')
    }

    dropDownChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    doSubmit = () => {
        console.log("add Transaction")
        // const { data: member } = await axios.post('http://127.0.0.1:5000/demo', this.state.data)
        // console.log(member);
    };


    render() {
        const { members, books, mid, bid } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>

                <label className="form-label"> Member Id </label>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="mid">Choose a Member:</label>
                    </div>
                    <select className="custom-select" onChange={this.dropDownChange} value={mid} id="mid">
                        {members.map(m => (
                            <option key={m.mid} value={m.mid}>{m.mid}</option>
                        ))}
                    </select>
                </div>


                <label className="form-label">Book ID</label>
                <div className="input-group mb-3">
                    <div>
                        <label className="input-group-text" htmlFor="bid">Choose a Book:</label>
                    </div>
                    <select value={bid} onChange={this.dropDownChange} name="bid" id="bid" className="custom-select">
                        {books.map(b => (
                            <option key={b.bid} value={b.bid}>{b.bid}</option>
                        ))}
                    </select>
                </div>

                {this.renderInput("start_date", "Start Date", "date")}
                {this.renderInput("end_date", "End Date", "date")}
                {this.renderInput("deadline", "Deadline", "date")}
                {this.renderInput("status", "Status")}
                {this.renderInput("amount", "Amount")}
                {this.renderButton('Submit')}
            </form>
        );
    }
}

export default AddTransaction;