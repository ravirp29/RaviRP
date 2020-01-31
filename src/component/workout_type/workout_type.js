import React, { Component } from "react";
// import Shoulder from './component/shoulder/shoulder'
import { createPortal } from "react-dom";
class Workouttype extends Component {
    render() {
        return (
            <div>
                <section id="team" className="pb-5" >
                    <div className="container">
                        <h5 className="section-title h1">Types of workout</h5>
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <div className="image-flip" ontouchstart="this.classList.toggle('hover');" />
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid" src="images/biceprow.jpg" alt="card image" /></p>
                                                <h4 className="card-title">BICEPS</h4>
                                                <p className="card-text">Bicep don't grow in tree,so click on see workout to view the workouts.</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">BICEPS</h4>
                                                <p className="card-text">sometimes i whisper to my bicep in my gym douche voice.</p>
                                                <a href="biceps.html" float-align="right" className="btn btn-primary">See Workout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid" src="images/triceprow.jpg" alt="card image" /></p>
                                                <h4 className="card-title">TRICEPS</h4>
                                                <p className="card-text">Just because your triceps have fallen behind your biceps, doesn't mean you should back off your triceps workouts.</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">TRICEPS</h4>
                                                <p className="card-text">Just because your triceps have fallen behind your biceps, doesn't mean you should back off your triceps workouts.</p>
                                                <a href="triceps.html" float-align="right" className="btn btn-primary">See Workout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid" src="images/chestalt.jfif" alt="card image" /></p>
                                                <h4 className="card-title">CHEST</h4>
                                                <p className="card-text">Your chest should always stick out furthur than your gut..</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">CHEST</h4>
                                                <p className="card-text">Your chest should always stick out furthur than your gut..</p>
                                                <a href="forearms.html" float-align="right" className="btn btn-primary">See Workout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid" src="images/forerow.jfif" alt="card image" /></p>
                                                <h4 className="card-title">FOREARM</h4>
                                                <p className="card-text">Add weight.Get stronger.Repeat</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">FOREARM</h4>
                                                <p className="card-text">click the button to view workouts.</p>
                                                <a href="forearms.html" float-align="right" className="btn btn-primary">See Workout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid" src="images/absrow.jpg" alt="card image" /></p>
                                                <h4 className="card-title">ABS</h4>
                                                <p className="card-text">The best ab workout is 5 sets of stop eating junk foods.</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">ABSWORKOUT</h4>
                                                <p className="card-text">just click on the button to view the abs workout.</p>
                                                <a href="abs.html" float-align="right" className="btn btn-primary">See Workout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <div className="image-flip" ontouchstart="this.classNameList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img className=" img-fluid" src="images/shoulderrow.jfif" alt="card image" /></p>
                                                <h4 className="card-title">SHOULDER</h4>
                                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">SHOULDER</h4>
                                                <p className="card-text">click on the below button to view the workouts</p>
                                                <a Component={Shoulder} float-align="right" className="btn btn-primary">See Workout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>
            </div>
        );
    }
}
export default Workouttype;