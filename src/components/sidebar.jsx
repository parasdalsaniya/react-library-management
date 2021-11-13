import React from 'react';
import { Link } from 'react-router-dom';

class SideBar extends React.Component {
    state = {
        selectedItem: "/dashboard"
    };
    listGroup = [
        { path: "/dashboard", name: "Dashboard" },
        { path: "/addmember", name: "Add Members" },
        { path: "/addbook", name: "Add Books" },
        { path: "/addtransaction", name: "Add Transaction" },
        { path: "/importbook", name: "Import Books" },
        { path: "/books", name: "Book List" },
        { path: "/members", name: "Member List" },
        { path: "/transaction", name: "Transaction" }
    ];
    handleSelectedItem = (item) => {
        console.log(this.state.selectedItem)
        this.setState({ selectedItem: item });
        console.log(this.state.selectedItem)
    };
    render() {
        return (
            <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ "minWidth": "200px", "maxWidth": "280px", height: "100vh" }}>

                <ul className="nav nav-pills flex-column mb-auto">

                    {this.listGroup.map(l => (
                        <Link
                            key={l.path}
                            to={l.path}
                            className={l.path === this.state.selectedItem ? "nav-link link-dark active" : "nav-link link-dark"}
                            onClick={() => this.handleSelectedItem(l.path)}
                        >
                            {l.name}
                        </Link>
                    ))}

                </ul>
            </div>
        );
    }
}

export default SideBar;

// const SideBar = (onItemSelect) => {
//     const listGroup = [
//         { path: "/dashboard", name: "Dashboard" },
//         { path: "/addmember", name: "Add Members" },
//         { path: "/addbook", name: "Add Books" },
//         { path: "/importbook", name: "Import Books" },
//         { path: "/books", name: "Book List" },
//         { path: "/members", name: "Member List" }
//     ]
//     var selectedItem = "/dashboard";
//     const handleSelectedItem = (item) => {
//         console.log(selectedItem)
//         selectedItem = item;
//         console.log(selectedItem)
//     };
//     return (
//         <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ "minWidth": "200px", "maxWidth": "280px", height: "100vh" }}>

//             <ul className="nav nav-pills flex-column mb-auto">

//                 {listGroup.map(l => (
//                     <Link key={l.path} to={l.path} className={l.path === selectedItem ? "nav-link link-dark active" : "nav-link link-dark"} onClick={() => handleSelectedItem(l.path)}>{l.name}</Link>
//                 ))}

//             </ul>
//         </div>
//     );
// }

// export default SideBar;

/* <li>
                    <Link to="/dashboard" className="nav-link link-dark active">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/addmember" className="nav-link link-dark">
                        Add Members
                    </Link>
                </li>
                <li>
                    <Link to="/addbook" className="nav-link link-dark">
                        Add Books
                    </Link>
                </li>
                <li>
                    <Link to="/importbook" className="nav-link link-dark">
                        Import Books
                    </Link>
                </li>
                <li>
                    <Link to="/books" className="nav-link link-dark">
                        Book List
                    </Link>
                </li>
                <li>
                    <Link to="/members" className="nav-link link-dark">
                        Member List
                    </Link>
                </li> */