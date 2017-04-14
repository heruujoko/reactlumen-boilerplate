import React , { Component } from 'react'
import store from './../store/store';
import { isSignedIn } from './../globals/auth'
import { destroySession } from './../actions/sessionActions'
import Header from './Header'

export default class Dashboard extends Component {

  constructor(){
    super()
  }



  render(){
    return (
      <div>
        <Header />
      </div>
    )
  }

}
