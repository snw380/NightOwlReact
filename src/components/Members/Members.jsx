import React from "react";

function Members() {
    return(
<div class="container text-center">
    <div class="row">
         {/* Left Column */}
        <div class="col-md-3 well">
          {/* <--  KD RATIO --> */}
            <div class="card ">
                <div class="well text-center">
                    <div class="card-body">
                        <h5 href="#">K/D Ratio</h5>
                        <p class="card-text">
                        <span id="kd"></span>
                        </p>
                    </div>
                </div>
            </div>        
          {/* <-- WIN LOSS RATIO --> */}
            <div class="card ">
                <div class="well text-center">
                    <div class="card-body">
                        <h5 href="#">W/L Ratio</h5>
                        <p class="card-text">
                        <span id="wl"></span>
                        </p>
                    </div>
                </div>
            </div>

            {/* <-- TOTAL TIME PLAYED --> */}
            <div class="card ">
                <div class="well text-center">
                    <div class="card-body">
                        <h5 href="#">Total Time Played</h5>
                        <p class="card-text">
                            <span id="ttp"></span>
                        </p>
                    </div>
                </div>
            </div>

            {/* <-- TOTAL GAMES PLAYED -->*/}
            <div class="card ">
                <div class="well text-center">
                    <div class="card-body">
                        <h5 href="#">Total Games Played</h5>
                        <p class="card-text">
                        <span id="tgp"></span>
                        </p>
                    </div>
                </div>
            </div>


            {/* <!-- ACCURACY--> */}
            <div class="card ">
                <div class="well text-center">
                    <div class="card-body">
                        <h5 href="#">Accuracy</h5>
                        <p class="card-text">
                        <span id="acc"></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- Center element --> */}
        {/* <div class="col-md-6">
            <iframe url= "https://giphy.com/embed/d8i1XJjV2Ym53KK0Dn" 
            id="centerElement"
            width="500" 
            height="700" 
            position = "centered"
            frameBorder="0" 
            allowFullScreen>
            </iframe>
        </div> */}

      {/*  <!-- Right Column -->*/}
      <div class="col-md-3 well">
          {/* <--  KD RATIO --> */}
            <div class="card ">
                <div class="well text-center">
                    <div class="card-body">
                        <h5 href="#">K/D Ratio</h5>
                        <p class="card-text">
                        <span id="kd"></span>
                        </p>
                    </div>
                </div>
            </div>        
          {/* <-- WIN LOSS RATIO --> */}
            <div class="card ">
                <div class="well text-center">
                    <div class="card-body">
                        <h5 href="#">W/L Ratio</h5>
                        <p class="card-text">
                        <span id="wl"></span>
                        </p>
                    </div>
                </div>
            </div>

            {/* <-- TOTAL TIME PLAYED --> */}
            <div class="card ">
                <div class="well text-center">
                    <div class="card-body">
                        <h5 href="#">Total Time Played</h5>
                        <p class="card-text">
                            <span id="ttp"></span>
                        </p>
                    </div>
                </div>
            </div>

            {/* <-- TOTAL GAMES PLAYED -->*/}
            <div class="card ">
                <div class="well text-center">
                    <div class="card-body">
                        <h5 href="#">Total Games Played</h5>
                        <p class="card-text">
                        <span id="tgp"></span>
                        </p>
                    </div>
                </div>
            </div>


            {/* <!-- ACCURACY--> */}
            <div class="card ">
                <div class="well text-center">
                    <div class="card-body">
                        <h5 href="#">Accuracy</h5>
                        <p class="card-text">
                        <span id="acc"></span>
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