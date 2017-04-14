import React , { Component } from 'react'
import store from './../store/store';
import { setSession } from './../actions/sessionActions'
import { getRequest, postRequest } from './../globals/network'
import swal from 'sweetalert'
import {
  Redirect
} from 'react-router-dom'

export default class Login extends Component {

  constructor(){
    super()
    this.state = {
      nik: "",
      password: "",
      successLogin: false
    }
  }

  onChangeUsername(e){
    this.setState({
      nik: e.target.value
    })
  }

  onChangePassword(e){
    this.setState({
      password: e.target.value
    })
  }

  doSignIn(){
    let payload = {
      nik : this.state.nik,
      password: this.state.password
    }
    postRequest('/api/signin',payload,(res) => {
      store.dispatch(setSession(res.data));
      this.setState({
        successLogin: true
      })
    },(err) => {
      console.log(err);
      swal({
        title: "Oops!",
        text: "Invalid username or password.",
        type: "error",
        timer: 1500,
        showConfirmButton: false
      });
    })
  }

  render(){

    if(this.state.successLogin){
      return (
        <Redirect to={{ pathname: '/dashboard' }}/>
      );
    }

    return (
      <div className="container login-wrapper">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card-group mb-0">
              <div className="card p-4">
                <div className="card-block">
                  <h1>Login</h1>
                  <p className="text-muted">Sign In to your account</p>
                  <div className="input-group mb-3">
                    <span className="input-group-addon"><i className="icon-user"></i></span>
                    <input type="text" className="form-control" placeholder="Username" onChange={this.onChangeUsername.bind(this)}/>
                  </div>
                  <div className="input-group mb-4">
                    <span className="input-group-addon"><i className="icon-lock"></i></span>
                    <input type="password" className="form-control" placeholder="Password" onChange={this.onChangePassword.bind(this)}/>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <button type="button" className="btn btn-primary px-4" onClick={this.doSignIn.bind(this)}>Login</button>
                    </div>
                    <div className="col-6 text-right">
                      <button type="button" className="btn btn-link px-0">Forgot password?</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-inverse card-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                <div className="card-block text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button type="button" className="btn btn-primary active mt-3">Register Now!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}
