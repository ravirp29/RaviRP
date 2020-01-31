import React, { Component } from "react";
class Legworkout extends Component {
    render() {
        return (
            <div>


                <section className="legworkout-wrapper">
                    <h1>Legworkout</h1>

                    <img src="images/legworkout.jfif" align="middle" alt="image not found" width="1250px" height="1000px" />
                </section>
                <section className="jumbotron text-center" style="background-image:images/legworkout.jfif; ">

                </section>
                <div className="container">

                    <center><button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">click on the button to watch video</button></center>


                    <div className="modal fade" id="myModal" role="dialog">
                        <div className="modal-dialog">


                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title">Leg Workout video</h4>
                                </div>
                                <div className="modal-body">
                                    {/* <iframe width="420" height="345" src="https://www.youtube.com/embed/EutHQxnpSjI" >
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          
                    </iframe> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        );
    }
}
export default Legworkout