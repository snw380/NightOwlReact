import React from "react";


function Login() {
    return(
     <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3"> 
            <h2>Login Form</h2>
            <form class="login">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="email-input" placeholder="Email"/>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="password-input" placeholder="Password"/>
              </div>
              <button type="submit" class="btn btn-default">Login</button>
            </form>
            <br />
            <p>Or sign up <a href="/">here</a></p>
          </div>
        </div>
      </div>

    )
}

export default Login