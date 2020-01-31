import React, { Component } from "react";
import { Link } from "react-router-dom";
class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img className="logoImg" src="images/logo.png" alt="logopic" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link to="index">Home</Link>
                                    <span className="sr-only">(current)</span>

                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="https://www.julian.com/guide/muscle/bodybuilding-diet">Diet Plan</a>
                                </li>
                                {/* <li className="nav-item">
                                    <Link to="/legworkout">Leg Workout</Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link to="/workouttype">workout_type</Link>
                                </li>
                                <li className="nav-item">
                                    <a class="nav-link" href="/contact">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login">Log in</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav></div>
        );
    }
}
export default Header;
