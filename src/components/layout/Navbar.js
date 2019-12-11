import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'



const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {

  const authLinks = (
    <ul className="navbar-nav">
      <li className="nav-item"><Link  className="nav-link" to="/posts">Posts</Link></li>
      <li className="nav-item"><Link className="nav-link" onClick={logout} to="#!"> <i className="fas fa-sign-out-alt"></i>{' '}<span className="hide-sm">Log out</span></Link></li>
    </ul>
  )


  const guestLinks = (
  <ul className="navbar-nav">
    <li className="nav-item"><Link  className="nav-link" to="/posts">Posts</Link></li>
    <li className="nav-item"><Link   className="nav-link" to="/register">Register</Link></li>
    <li className="nav-item"><Link  className="nav-link" to="/login">Login</Link></li>
  </ul>
)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">Confessions</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>) }

    </ul>
  </div>
</nav>

  )
}


Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Navbar)
