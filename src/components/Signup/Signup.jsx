import React from "react";


function signUp() {
    return(
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <h2>Sign Up Form</h2>
                    <form class="signup">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="email-input" placeholder="Email"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="password-input" placeholder="Password"/>
                    </div>
                    <div style="display: none" id="alert" class="alert alert-danger" role="alert">
                        <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                        <span class="sr-only">Error:</span> <span class="msg"></span>
                    </div>
                    <button type="submit" class="btn btn-default">Sign Up</button>
                    </form>
                    <br />
                    <p>Or log in <a href="/login">here</a></p>
                </div>
            </div>
        </div>
    )
}

export default signUp