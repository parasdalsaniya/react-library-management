import "./App.css";
import React from "react";
import NavBar from "./components/navbar";
import SideBar from "./components/sidebar";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import AddBook from "./components/addBook";
import AddMember from "./components/addMember";
import ImportBook from "./components/importBook";
import Books from "./components/books";
import Members from "./components/members";
import Member from "./components/member";
import AddTransaction from "./components/addtransaction";
import Transactions from "./components/transactions";

function App() {
    const handleSelectedItem = (item) => {
        console.log(item);
    };
    return (
        <React.Fragment>
            {/* <main className="container"> */}
            <div className="position-sticky">
                <NavBar />
            </div>
            <div className="row">
                <div className="col-2 position-sticky">
                    <SideBar onItemSelect={handleSelectedItem} />
                </div>
                <div className="col p-3 overflow-auto">
                    <main className="container">
                        <Switch>
                            <Route path="/book/:id" component={Member} />
                            <Route path="/member/:id" component={Member} />
                            {/* <Route
                                path="/dashboard"
                                abc="fsa"
                                render={(props) => <Dashboard {...props} />}
                            /> */}
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/addbook" component={AddBook} />
                            <Route path="/addmember" component={AddMember} />
                            <Route path="/importbook" component={ImportBook} />
                            <Route path="/books" component={Books} />
                            <Route path="/members" component={Members} />
                            <Route
                                path="/addtransaction"
                                component={AddTransaction}
                            />
                            <Route
                                path="/transaction"
                                component={Transactions}
                            />
                            {/* <Redirect to="/dashboard" /> */}
                        </Switch>
                    </main>
                </div>
            </div>
            {/* </main> */}
        </React.Fragment>
    );
}

export default App;
