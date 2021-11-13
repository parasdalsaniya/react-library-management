// import { ToastContainer } from 'react-toastify';
// import config from '../config.json';
import React from 'react';
import axios from "axios";
import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';
import SearchBox from './searchBox';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const apiEndpoint = 'http://127.0.0.1:5000/member';

class Members extends React.Component {
    state = {
        members: [
            { mid: 1, name: "Pd1", email: "email1@mail.co", debt: 0, amount_paid: 10 },
            { mid: 2, name: "Pd2", email: "email2@mail.co", debt: 10, amount_paid: 0 },
            { mid: 3, name: "Pd3", email: "email3@mail.co", debt: 5.5, amount_paid: 2.50 }
        ],
        sortColumn: { path: 'mid', order: 'asc' },
        searchQuery: ''
    }

    columns = [
        { path: "mid", lable: "Member ID", content: item => <Link className="clickable" to={`/book/${item.mid}`}>{item.mid}</Link> },
        { path: "name", lable: "Name" },
        { path: "email", lable: "Email" },
        { path: "debt", lable: "Debt" },
        { path: "amount_paid", lable: "Amount Paid" },
        {
            path: "delete",
            content: member => (
                <button onClick={() => this.handleDelete(member)} className="btn btn-danger btn-sm">
                    Delete
                </button>
            )
        }
    ]

    async componentDidMount() {
        const { data: members } = await axios.get(apiEndpoint);
        this.setState({ members })
    }

    handleSearch = query => {
        this.setState({ searchQuery: query })
    }

    handleSort = sortColumn => {
        this.setState({ sortColumn })
    }

    // handleUpdate = async member => {
    //     member.name = "updated";
    //     const { data } = await axios.put(apiEndpoint + '/' + member.mid, this.state.);
    //     // axios.patch(apiEndpoint + '/' + member.mid, { mid: member.mid });
    //     console.log(data)
    //     this.componentDidMount()
    // }

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
        const { members, sortColumn, searchQuery } = this.state

        const result = members.filter(m =>
            m.name.toLowerCase().startsWith(searchQuery.toLowerCase())
        );
        const sortedMembers = searchQuery
            ? _.orderBy(result, [sortColumn.path], [sortColumn.order])
            : _.orderBy(members, [sortColumn.path], [sortColumn.order])
        console.log(result)

        return (
            <React.Fragment>
                {/* <ToastContainer /> */}
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
                        data={sortedMembers}
                        columns={this.columns}
                        onDelete={this.handleDelete}
                    />
                </table>
            </React.Fragment>
        );
    }
}

export default Members;