import React, { Component } from 'react';
class Login extends Component {
    render() {
        return (
            <div>

                <div className="container container-session">
                    <h4>User setting</h4>


                    <form className="needs-validation" novalidate id="user-profile-form" method="post" />
                    <div className="contact-me-section">
                        <div className="pad-wrapper">
                            <div className="form-group">

                                <h5>contact me</h5>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label for="mobile" className="font-label">Mobile:</label>

                                    </div>
                                    <div className="col-md-6 checkb" style="text-align: right;">
                                        <input type="checkbox" id="check1" name="option1" value="something" checked /><label className="hideon">Hide
                                          on
                  profile</label>

                                    </div>
                                </div>
                            </div>


                            <input type="tel" className="form-control" id="mobile" placeholder="Mobile" required />
                        </div>

                        <div className="form-group btn-wrapper">
                            <button type="button" className="btn btn-light">Cancel</button>
                            <button type="submit" className="btn btn-primary">Save</button>

                        </div>
                    </div>



                    <div className="get-to-know-section">
                        <div className="pad-wrapper">
                            <div className="form-group">
                                <h5>Get to know</h5>
                                <label for="nick-name" className="font-label">Nick name</label>
                                <input type="text" className="form-control" id="nick-name" name="nick-name" placeholder="Enter your nick name"
                                    required />
                            </div>
                            <div className="form-group email">
                                <label for="email" className="font-label">Email id</label>
                                <input type="email" className="form-control" id="email" name="emailid" placeholder="enter the email address"
                                    required />
                            </div>

                            <div className="row">
                                <div className="form-group col-sm-4">
                                    <label for="Birthday" className="font-label">Birthday</label>
                                    <select className="form-control" id="Birthday" required>
                                        <option value="">select month</option>
                                        <option value="JAN">January</option>
                                        <option value="FEB">February</option>
                                        <option value="MAR">March</option>
                                        <option value="APR">April</option>
                                        <option value="MAY">May</option>
                                        <option value="JUN">June</option>
                                        <option value="JUL">July</option>
                                        <option value="AUG">August</option>
                                        <option value="SEP">September</option>
                                        <option value="OCT">October</option>
                                        <option value="NOV">November</option>
                                        <option value="DEC">December</option>
                                    </select>
                                </div>
                                <div className="form-group col-sm-2">
                                    <div><input type="checkbox" id="check1" name="option1" value="something" checked /><label
                                        className="hideon">Hide on profile</label></div>
                                    <select className="form-control" id="day" required>
                                        <option value="">N/A</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="1">3</option>
                                        <option value="1">4</option>
                                        <option value="1">5</option>
                                        <option value="1">6</option>
                                        <option value="1">7</option>
                                        <option value="1">8</option>
                                        <option value="1">9</option>
                                        <option value="1">10</option>
                                        <option value="1">11</option>
                                        <option value="1">12</option>
                                        <option value="1">13</option>
                                        <option value="1">14</option>
                                        <option value="1">15</option>
                                        <option value="1">16</option>
                                        <option value="1">17</option>
                                        <option value="1">18</option>
                                        <option value="1">19</option>
                                        <option value="1">20</option>
                                        <option value="1">21</option>
                                        <option value="1">22</option>
                                        <option value="1">23</option>
                                        <option value="1">24</option>
                                        <option value="1">25</option>
                                        <option value="1">26</option>
                                        <option value="1">27</option>
                                        <option value="1">28</option>
                                        <option value="1">29</option>
                                        <option value="1">30</option>
                                        <option value="1">31</option>

                                    </select>

                                </div>
                                <div className="form-group col-sm-4">
                                    <label for="workanniversary" className="font-label">Work Anniversary</label>
                                    <select className="form-control" id="workanniversary" required>
                                        <option value="">N/A</option>
                                        <option value="JAN">January</option>
                                        <option value="FEB">February</option>
                                        <option value="MAR">March</option>
                                        <option value="APR">April</option>
                                        <option value="MAY">May</option>
                                        <option value="JUN">June</option>
                                        <option value="JUL">July</option>
                                        <option value="AUG">August</option>
                                        <option value="SEP">September</option>
                                        <option value="OCT">October</option>
                                        <option value="NOV">November</option>
                                        <option value="DEC">December</option>
                                    </select>
                                </div>
                                <div className="form-group col-sm-2">
                                    <input type="checkbox" id="check1" name="option1" value="something" checked /><label className="hideon">Hide on
                profile</label>
                                    <span className="checkmark"></span>
                                    <select className="form-control" id="day" required>
                                        <option value="">N/A</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="1">3</option>
                                        <option value="1">4</option>
                                        <option value="1">5</option>
                                        <option value="1">6</option>
                                        <option value="1">7</option>
                                        <option value="1">8</option>
                                        <option value="1">9</option>
                                        <option value="1">10</option>
                                        <option value="1">11</option>
                                        <option value="1">12</option>
                                        <option value="1">13</option>
                                        <option value="1">14</option>
                                        <option value="1">15</option>
                                        <option value="1">16</option>
                                        <option value="1">17</option>
                                        <option value="1">18</option>
                                        <option value="1">19</option>
                                        <option value="1">20</option>
                                        <option value="1">21</option>
                                        <option value="1">22</option>
                                        <option value="1">23</option>
                                        <option value="1">24</option>
                                        <option value="1">25</option>
                                        <option value="1">26</option>
                                        <option value="1">27</option>
                                        <option value="1">28</option>
                                        <option value="1">29</option>
                                        <option value="1">30</option>
                                        <option value="1">31</option>

                                    </select>

                                </div>
                            </div>


                            <div className="form-group">
                                <label for="Language" className="font-label">Language spoken</label>
                                <input type="text" className="form-control" id="Language" name="Language spoken" required />
                            </div>

                            <div className="form-group">
                                <label for="perfessional skill" className="font-label">Perfessional skills</label>
                                <textarea className="form-control" rows="3" id="perfessional skill" required></textarea>
                            </div>
                            <div className="form-group">
                                <label for="what i m currently working on" className="font-label">what i m currently working on</label>
                                <textarea className="form-control" rows="3" id="what i m currently working on" required></textarea>
                            </div>
                            <div className="form-group">
                                <label for="something about me" className="font-label">something about me</label>
                                <textarea className="form-control" rows="3" id="something about me" required></textarea>
                            </div>




                            <div className="form-group btn-wrapper">
                                <button type="button" className="btn btn-light">Cancel</button>
                                <button type="submit" className="btn btn-primary">Save</button>

                            </div>
                        </div>

                    </div>



                </div>
            </div>
        )
    }
}