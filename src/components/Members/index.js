import React from "react";
import "./style.css";

function Members() {
    return(
<div className="container text-center">
    <div className="row">
        
         {/* Left Column */}
        <div className="col-md-3 well">
          {/* <--  KD RATIO --> */}
            <div className="card ">
                <div className="well text-center">
                    <div className="card-body">
                        <h5 href="#">K/D Ratio</h5>
                        <p className="card-text">
                        <span id="kd">??</span>
                        </p>
                    </div>
                </div>
            </div>        
          {/* <-- WIN LOSS RATIO --> */}
            <div className="card ">
                <div className="well text-center">
                    <div className="card-body">
                        <h5 href="#">W/L Ratio</h5>
                        <p className="card-text">
                        <span id="wl">??</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* <-- TOTAL TIME PLAYED --> */}
            <div className="card ">
                <div className="well text-center">
                    <div className="card-body">
                        <h5 href="#">Total Time Played</h5>
                        <p className="card-text">
                            <span id="ttp">??</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* <-- TOTAL GAMES PLAYED -->*/}
            <div className="card ">
                <div className="well text-center">
                    <div className="card-body">
                        <h5 href="#">Total Games Played</h5>
                        <p className="card-text">
                        <span id="tgp">??</span>
                        </p>
                    </div>
                </div>
            </div>


            {/* <!-- ACCURACY--> */}
            <div className="card ">
                <div className="well text-center">
                    <div className="card-body">
                        <h5 href="#">Accuracy</h5>
                        <p className="card-text">
                        <span id="acc">??</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Center element --> */}
        <div className="col-md-6">
            <iframe url= "https://giphy.com/embed/d8i1XJjV2Ym53KK0Dn" 
            title="centerGiphy"
            id="centerElement"
            width="500" 
            height="700" 
            position = "centered"
            frameBorder="0" 
            allowFullScreen>
            </iframe>
        </div>

      {/*  <!-- Right Column -->*/}
      <div className="col-md-3 well">
          {/* <--  KD RATIO --> */}
            <div className="card ">
                <div className="well text-center">
                    <div className="card-body">
                        <h5 href="#">K/D Ratio</h5>
                        <p className="card-text">
                        <span id="kd">??</span>
                        </p>
                    </div>
                </div>
            </div>        
          {/* <-- WIN LOSS RATIO --> */}
            <div className="card ">
                <div className="well text-center">
                    <div className="card-body">
                        <h5 href="#">W/L Ratio</h5>
                        <p className="card-text">
                        <span id="wl">??</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* <-- TOTAL TIME PLAYED --> */}
            <div className="card ">
                <div className="well text-center">
                    <div className="card-body">
                        <h5 href="#">Total Time Played</h5>
                        <p className="card-text">
                            <span id="ttp">??</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* <-- TOTAL GAMES PLAYED -->*/}
            <div className="card ">
                <div className="well text-center">
                    <div className="card-body">
                        <h5 href="#">Total Games Played</h5>
                        <p className="card-text">
                        <span id="tgp">??</span>
                        </p>
                    </div>
                </div>
            </div>


            {/* <!-- ACCURACY--> */}
            <div className="card ">
                <div className="well text-center">
                    <div className="card-body">
                        <h5 href="#">Accuracy</h5>
                        <p className="card-text">
                        <span id="acc">??</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}

export default Members