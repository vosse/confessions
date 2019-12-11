import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


const Landing = ({ isAuthenticated }) => {

  if(isAuthenticated) {
    return <Redirect to="/posts" />
  }

  return (
    <section className="landing">
      <div className='landing-container'>
          <h1 className="x-large">Confessions</h1>
          <p className="lead">
            Post confessions anonymously that you're too afraid to admit publicly.
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">Sign Up</Link>
            <Link to="/login" className="btn btn-light">Login</Link>
          </div>
      </div>
    </section>
  )
}


Landing.propTypes = {
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing)
