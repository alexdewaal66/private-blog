import React, {useState} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import TopMenu from './components/TopMenu';
import HomePage from './pages/Home';
import Login from './pages/Login';
import AllBlogposts from './pages/AllBlogposts';
import Blogpost from './pages/Blogpost';
import Logout from "./pages/Logout";

function PrivateRoute({children, isAuthenticated, ...rest}) {
    return (
        <Route {...rest}>
            {isAuthenticated ? children : <Redirect to="/home"/>}

        </Route>
    )
}

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, setAuthenticated] = useState(false);
    console.log(`isAuthenticated:`, isAuthenticated);


    return (
        <Router>
            <TopMenu
                isAuthenticated={isAuthenticated}
            />
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route path="/login">
                    <Login
                        setAuthenticated={setAuthenticated}
                    />
                </Route>
                {isAuthenticated && (
                    <>
                        <PrivateRoute path="/blogposts" isAuthenticated={isAuthenticated}>
                            <AllBlogposts/>
                        </PrivateRoute>
                        <PrivateRoute path="/blog/:id" isAuthenticated={isAuthenticated}>
                            <Blogpost/>
                        </PrivateRoute>
                        <PrivateRoute path="/logout" isAuthenticated={isAuthenticated}>
                            <Logout
                                setAuthenticated={setAuthenticated}
                            />
                        </PrivateRoute>
                    </>)}
            </Switch>
        </Router>
    );
}

export default App;
