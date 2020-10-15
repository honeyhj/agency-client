import React, {createContext} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './Components/Home/Home';
import SignIn from './Components/SignIn/SignIn';
import {useState} from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Order from './Components/Order/Order';
import ServerList from './Components/ServerList/ServerList';
import Review from './Components/Review/Review';
import OrderList from './Components/OrderList/OrderList';
export const UserContext = createContext()
function App() {
    const [loggedInUser,
        setLoggedInUser] = useState({});
    return (
        <div className="App">
            <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route path="/signIn">
                            <SignIn></SignIn>
                        </Route>
                        <Route path="/order">
                            <Order></Order>
                        </Route>
                        <Route path="/review">
                            <Review></Review>
                        </Route>
                        <Route path="/orderList">
                            <OrderList></OrderList>
                        </Route>
                        <Route path="/serverList">
                            <ServerList></ServerList>
                        </Route>
                        <PrivateRoute path="/dashboard">
                            <Dashboard></Dashboard>
                        </PrivateRoute>
                    </Switch>
                </Router>
            </UserContext.Provider>
        </div>
    );
}

export default App;
