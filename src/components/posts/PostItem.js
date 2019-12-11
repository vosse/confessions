import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { addLike, removeLike, deletePost } from '../../actions/post'



const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions
}) => (
  <div className='post-item'>
<div>
  <h4 className='name-post'>{name}<span className='post-date'><Moment format='DD/MM/YYYY'>{date}</Moment>
</span></h4>
</div>
<div>
  <p className='post-text'>{text}</p>


  {showActions && (
    <Fragment>
      <button
        onClick={() => addLike(_id)}
        id='tmbup-btn'
        type='button'
        className='btn btn-light'
      >
        <i id='tmbup' className='fas fa-angle-up' />{' '}
        <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
      </button>
      <button
        onClick={() => removeLike(_id)}
        type='button'
        id='tmbdn-btn'
        className='btn btn-light'
      >
        <i id='tmbdn' className='fas fa-angle-down' />
      </button>
      <Link to={`/post/${_id}`} id='discussion-btn' className='btn btn-primary'>
        Discussion{' '}
        {comments.length > 0 && (
          <span className='comment-count'>{comments.length}</span>
        )}
      </Link>
      {!auth.loading && user === auth.user._id && (
        <button
          onClick={() => deletePost(_id)}
          type='button'
          className='btn btn-danger'
          id='delete-btn'
        >
          <i className='fas fa-times' />
        </button>
      )}
    </Fragment>
  )}
</div>
</div>

  )



PostItem.defaultProps = {
  showActions: true
}

PostItem.postTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(PostItem)
