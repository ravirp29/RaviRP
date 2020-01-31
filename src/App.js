import React, { Component } from "react";
import { Router, Link, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from './component/header/header';
import Legworkout from './component/legworkout/legworkout';
import Login from './component/login/login';
import Contact from './component/contact/contact';
import Body from './component/body/body';
import Home from './component/home/home';
import Workouttype from './component/workout_type/workout_type';

export const history = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                <ul>
                     <li>
                     <Link to="/">Home</Link>
                     </li>
                     <li>
                     <Link to="/workouttype">Workout</Link>
                     </li>
                     <li>
                     <Link to="/contact">contact</Link>
                     </li>
                     <li>
                     <Link to="/login">Login</Link>
                     </li>
                </ul>
                    
                    <Route exact path="/" component={Home} />
                    <Route path="/workouttype" component={Workouttype} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/login" component={Login} />
                    </div>
               
            </Router>
        );

    }

}

export default App;

