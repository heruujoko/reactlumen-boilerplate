import React , {Component} from 'react'
import store from './../store/store';
import { isSignedIn } from './../globals/auth'
import { destroySession } from './../actions/sessionActions'
import { connect } from 'react-redux'

class Header extends Component {

  constructor(){
    super()
    isSignedIn()
    this.state = {
      menuOpened: false
    }
  }

  doSignOut(){
    store.dispatch(destroySession());
    window.location = '/'
  }

  toggleMenu(){
    this.setState({
      menuOpened: !this.state.menuOpened
    })
  }

  render(){
    return (
      <header className="app-header navbar">
          <button className="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button">☰</button>
          <a className="navbar-brand" href="#"></a>
          <ul className="nav navbar-nav d-md-down-none">
              <li className="nav-item">
                  <a className="nav-link navbar-toggler sidebar-toggler" href="#">☰</a>
              </li>
          </ul>
          <ul className="nav navbar-nav ml-auto">

              <li className={this.state.menuOpened ? "nav-item dropdown open" : "nav-item dropdown "} onClick={this.toggleMenu.bind(this)}>
                  <a className="nav-link dropdown-toggle nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                      <img src="img/avatars/6.jpg" className="img-avatar" alt="admin@bootstrapmaster.com" />
                      <span className="d-md-down-none">{this.props.session.user.name}</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">

                      <div className="dropdown-header text-center">
                          <strong>Account</strong>
                      </div>
                      <a className="dropdown-item" href="#"><i className="fa fa-user"></i> Profile</a>
                      <a onClick={this.doSignOut.bind(this)} className="dropdown-item" href="#"><i className="fa fa-lock"></i> Logout</a>
                  </div>
              </li>
              <li className="nav-item d-md-down-none">

              </li>

          </ul>
      </header>
    )
  }

}

function mapStateToProps(state) {
  return { session: state.session }
}

export default connect(mapStateToProps)(Header);;
