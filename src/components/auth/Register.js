import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { register } from '../../actions/auth'
import PropTypes from 'prop-types'


const Register = ({ register, isAuthenticated }) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData

  const onChange = (e) => { setFormData({...formData, [e.target.name]: e.target.value}) }

  const onSubmit = async (e) => {
    e.preventDefault()
    if(password !== password2) {

    } else {
      register({
        name, email, password
      })
    }
  }

  if(isAuthenticated) {
    return <Redirect to='/posts' />
  }

  return (
    <Fragment>
      <div id="register-center">
        <h1 className="large text" id="h1-center">Welcome. <span role="img">👋</span></h1>
        <form onSubmit={e => onSubmit(e)} >
          <div class="form-group">
            <label>Username</label>
            <input type="text" class="form-control" onChange={e => onChange(e)} name="name" value={name} placeholder="Enter username"/>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" onChange={e => onChange(e)} name="email" value={email} placeholder="example@domain.com"/>
            <small id="emailHelp" class="form-text text-muted">We'll probably never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" onChange={e => onChange(e)} name="password" value={password} placeholder="********"/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Confirm password</label>
            <input type="password" class="form-control" onChange={e => onChange(e)} name="password2" value={password2} placeholder="********"/>
          </div>
          <input type='submit' className='btn btn-primary' value='Register' />
        </form>
      </div>
    </Fragment>
  )

}

Register.propTypes = {
register: PropTypes.func.isRequired,
isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
isAuthenticated: state.auth.isAuthenticated
})


export default connect(mapStateToProps, { register })(Register)
