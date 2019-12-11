import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';

const CommentItem = ({
  postId,
  comment: { _id, text, name, user, date },
  auth,
  deleteComment
}) => (
  <div className='comment-item'>
    <div>
      <p className='name-post'>{name}<span className='post-date'><Moment format='DD/MM/YYYY'>{date}</Moment></span></p>
    </div>
    <div>
      <p className='comment-text'>{text}</p>

      {!auth.loading && user === auth.user._id && (
        <Fragment>
            <button
              onClick={() => deleteComment(postId, _id)}
              type='button'
              className='btn btn-danger'
              id='delete-btn'
              >
                <i className='fas fa-times' />
            </button>
          </Fragment>
        )}
    </div>
  </div>
)



CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
