import _ from 'lodash';
import axios from 'axios';
import React from 'react';
import TableBody from './common/tableBody';
import TableHeader from './common/tableHeader';
import SearchBox from './searchBox';

const apiEndpoint = 'http://127.0.0.1:5000/transaction';

class Transactions extends React.Component {

    state = {
        transactions: [
            // { id: 1, mid: 1, bid: 1, start_date: "11 / 06 / 2021", end_date: "18 / 3 / 2020", deadline: "23 / 03 / 2021", status: "pending", amount: 50 },
            // { id: 5, mid: 2, bid: 77, start_date: "09 / 07 / 2021", end_date: "02 / 5 / 2020", deadline: "06 / 04 / 2021", status: "pending", amount: 100 },
            // { id: 4, mid: 8, bid: 6, start_date: "07 / 04 / 2021", end_date: "31 / 1 / 2020", deadline: Date(2021, 8, 1), status: "Done", amount: 410 }
        ],
        sortColumn: { path: 'id', order: 'asc' },
        searchQuery: ''
    };

    columns = [
        { path: "id", lable: "ID" },
        { path: "mid", lable: "Member ID" },
        { path: "bid", lable: "Book ID" },
        { path: "start_date", lable: "Start Date" },
        { path: "end_date", lable: "End Date" },
        { path: "deadline", lable: "Deadline" },
        { path: "status", lable: "Status" },
        { path: "amount", lable: "Amount" },
        {
            path: "delete",
            content: transaction => (
                <button onClick={() => this.handleDelete(transaction)} className="btn btn-danger btn-sm">
                    Delete
                </button>
            )
        }
    ]

    async componentDidMount() {
        const { data: transactions } = await axios.get('http://127.0.0.1:5000/transaction');
        this.setState({ transactions })
        console.log('transactions', transactions)
    }


    handleSearch = query => {
        this.setState({ searchQuery: query })
    }

    handleSort = sortColumn => {
        this.setState({ sortColumn })
    }

    handleDelete = async transaction => {
        console.log(transaction)
        try {
            await axios.delete(apiEndpoint + '/' + transaction.id)
            this.componentDidMount()
        } catch (ex) {
            if (ex.response && ex.response.status === 404)
                alert("This post has already been deleted")
        }
        // const transaction = this.state.transactions.filter(t => t.id !== transaction.id)
        // this.setState({ transaction })
        console.log(transaction.id)
    }

    render() {
        const { transactions, sortColumn, searchQuery } = this.state;

        // const result = transactions.filter(t => t.id.toLowerCase().startsWith(searchQuery))
        const result = transactions.filter(t =>

            t.id.toString().toLowerCase().startsWith(searchQuery.toLowerCase())
        );
        const sortedTransactions = searchQuery
            ? _.orderBy(result, [sortColumn.path], [sortColumn.order])
            : _.orderBy(transactions, [sortColumn.path], [sortColumn.order])
        console.log(result)

        return (
            <React.Fragment>
                <SearchBox
                    value={searchQuery}
                    onChange={this.handleSearch}
                    placeholder="Search by Transaction ID..."
                />
                <table className="table">
                    <TableHeader
                        columns={this.columns}
                        sortColumn={sortColumn}
                        onSort={this.handleSort}
                    />
                    <TableBody
                        data={sortedTransactions}
                        columns={this.columns}
                    />
                </table>
            </React.Fragment>
        );
    }
}

export default Transactions;