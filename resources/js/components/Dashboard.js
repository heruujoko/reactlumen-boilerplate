import React , { Component } from 'react'
import store from './../store/store';
import { isSignedIn } from './../globals/auth'
import { destroySession } from './../actions/sessionActions'

export default class Dashboard extends Component {

  constructor(){
    super()
    isSignedIn()
  }

  doSignOut(){
    store.dispatch(destroySession());
    window.location = '/'
  }

  render(){
    return (
      <div>
        <h1>Dash</h1>
        <button onClick={this.doSignOut.bind(this)}>click to signout</button>
      </div>
    )
  }

}
