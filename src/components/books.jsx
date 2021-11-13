import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';
import { Link } from 'react-router-dom';
import SearchBox from './searchBox';

const apiEndpoint = 'http://127.0.0.1:5000/demo';

class Books extends React.Component {

    state = {
        books: [
            { bid: 1, title: "Rich dad poor dad", author: "abc", language_code: "eng", average_rating: 3, stock: 2 },
            { bid: 2, title: "Wings of fire", author: "xyz", language_code: "eng", average_rating: 4, stock: 1 },
            { bid: 4, title: "Chetan Bhagat", author: "abc", language_code: "eng", average_rating: 1, stock: 10 },
            { bid: 3, title: "Pollendd ", author: "xyz", language_code: "eng", average_rating: 5.2, stock: 0 }
        ],
        sortColumn: { path: 'bid', order: 'asc' },
        searchQuery: ''
    };

    columns = [
        { path: "bid", lable: "Book ID", content: item => <Link className="clickable" to={`/book/${item.bid}`}>{item.bid}</Link> },
        { path: "title", lable: "Title" },
        { path: "author", lable: "Author" },
        { path: "language_code", lable: "Language" },
        { path: "average_rating", lable: "Rating" },
        { path: "stock", lable: "Stocks" },
        {
            path: "delete",
            content: book => (
                <button onClick={() => this.handleDelete(book)} className="btn btn-danger btn-sm">
                    Delete
                </button>
            )
        }
    ]
    // async componentDidMount() {
    //     const { data: books } = await axios.get('http://127.0.0.1:5000/demo');
    //     this.setState({ books })
    //     console.log(books)
    // }

    handleSearch = query => {
        this.setState({ searchQuery: query })
    }

    handleSort = sortColumn => {
        this.setState({ sortColumn })
    }

    handleDelete = async member => {
        console.log(member)
        try {
            await axios.delete(apiEndpoint + '/' + member.mid)
            this.componentDidMount()
        } catch (ex) {
            if (ex.response && ex.response.status === 404)
                alert("This post has already been deleted")
        }
        // const members = this.state.members.filter(p => p.mid !== member.mid)
        // this.setState({ members })
        console.log(member.mid)
    }

    render() {
        const { books, sortColumn, searchQuery } = this.state

        const result = books.filter(b =>
            b.title.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
            b.author.toLowerCase().startsWith(searchQuery.toLowerCase())
        );

        const sortedBooks = searchQuery
            ? _.orderBy(result, [sortColumn.path], [sortColumn.order])
            : _.orderBy(books, [sortColumn.path], [sortColumn.order])
        console.log(result)

        return (
            <div>
                <SearchBox
                    value={searchQuery}
                    onChange={this.handleSearch}
                    placeholder="Search by book name..."
                />
                <table className="table">
                    <TableHeader
                        columns={this.columns}
                        sortColumn={sortColumn}
                        onSort={this.handleSort}
                    />
                    <TableBody
                        data={sortedBooks}
                        columns={this.columns}
                    />
                </table>
            </div>
        );
    }
}

export default Books;