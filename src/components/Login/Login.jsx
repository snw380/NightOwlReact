import React from "react";
import {
  Button,
  TextField,
  Grid,
  Paper,
 
  Typography,
 
  Link,
} from "@material-ui/core";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", authflag: 1 };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      username: event.state.username,
      password: event.state.password,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (
      this.state.username === "admin" &&
      this.state.password === "secret"
    ) {
      this.props.history.push("/home");
    } else {
      alert("Incorrect Credntials!");
    }
  }
  render() {
    return (
      <div>
    
        <Grid container spacing={0} justify="center" direction="row">
          <Grid item>
            <Grid
              container
              direction="column"
              justify="center"
              spacing={2}
              className="login-form"
            >
              <Paper
                variant="elevation"
                elevation={2}
                className="login-background"
              >
                <Grid item>
                  <Typography component="h1" variant="h5">
                    Sign in
                  </Typography>
                </Grid>
                <Grid item>
                  <form onSubmit={this.handleSubmit}>
                    <Grid container direction="column" spacing={2}>
                      <Grid item>
                        <TextField
                          type="email"
                          placeholder="Email"
                          fullWidth
                          name="username"
                          variant="outlined"
                          value={this.state.username}
                          onChange={(event) =>
                            this.setState({
                              [event.target.name]: event.target.value,
                            })
                          }
                          required
                          autoFocus
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          type="password"
                          placeholder="Password"
                          fullWidth
                          name="password"
                          variant="outlined"
                          value={this.state.password}
                          onChange={(event) =>
                            this.setState({
                              [event.target.name]: event.target.value,
                            })
                          }
                          required
                        />
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          className="button-block"
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    Forgot Password?
                  </Link>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Login;

// import React from "react";

// function Login() {
//     return(
//      <div className="container">
//         <div className="row">
//           <div className="col-md-6 col-md-offset-3">
//             <h2>Login Form</h2>
//             <form className="login">
//               <div className="form-group">
//                 <label for="exampleInputEmail1">Email address</label>
//                 <input type="email" className="form-control" id="email-input" placeholder="Email"/>
//               </div>
//               <div className="form-group">
//                 <label for="exampleInputPassword1">Password</label>
//                 <input type="password" className="form-control" id="password-input" placeholder="Password"/>
//               </div>
//               <button type="submit" className="btn btn-default">Login</button>
//             </form>
//             <br />
//             <p>Or sign up <a href="/">here</a></p>
//           </div>
//         </div>
//       </div>

//     )
// }

// export default Login
