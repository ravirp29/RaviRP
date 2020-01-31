import React, { Component } from "react";
import { Router, Switch, Route } from 'react-router-dom';
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

                <Header />

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/workouttype" component={Workouttype} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/login" component={Login} />
                </Switch>
                <Body />
            </Router>
        );

    }

}

export default App;

