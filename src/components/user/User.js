import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {  connect } from 'react-redux'
import { getUserById } from '../../actions/user'


const User = ({ getUserById, user: { user, loading }, auth, match }) => {

  useEffect( () => {
    getUserById(match.params.id)
  }. [getUserById])

  return (
    <Fragment>
    </Fragment>
  )
}

User.propTypes = {
  getUserById: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user,
  auth: state.auth
})


export default connect(mapStateToProps, { getUserById })(User)
