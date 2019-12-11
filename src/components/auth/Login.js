import React, { Fragment, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { login } from '../../actions/auth'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


const Login = ({ login, isAuthenticated }) => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const onChange = (e) => { setFormData({...formData, [e.target.name]: e.target.value}) }

  const onSubmit = async (e) => {
    e.preventDefault()

    login(email, password)

  }

  // Redirect if logged in
  if(isAuthenticated) {
    return <Redirect to="/posts" />
  }

  return (
    <Fragment>
      <div id="login-center">
        <h1 className="large text" id="h1-center">Welcome back. <span role="img">👋</span></h1>
        <form onSubmit={e => onSubmit(e)} >

          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" onChange={e => onChange(e)} name="email" value={email} placeholder="example@domain.com"/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" onChange={e => onChange(e)} name="password" value={password} placeholder="********"/>
          </div>
          <button type="submit" class="btn btn-primary" value="Login">Submit</button>
        </form>
      </div>
    </Fragment>
  )


}


Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
})



export default connect(mapStateToProps, { login })(Login)
