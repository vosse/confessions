import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';

const CommentForm = ({ postId, addComment }) => {

  const [text, setText] = useState('')

  return (
    <div id='commentform-center'>
      <div>
        <h3>Leave a comment</h3>
      </div>
      <form
      onSubmit={ (e) => {
        e.preventDefault()
        addComment(postId, { text })
        setText('')
      }}>
      <div className='form-group'>
      <textarea
        name='text'
        cols='30'
        rows='5'
        placeholder='Create a post'
        value={text}
        onChange={e => setText(e.target.value)}
        required
        id='comment-textarea'
      />
      </div>
      <input type='submit' className='btn btn-dark my-1' value='Submit' id='comment-submit'/>
      </form>
    </div>
  )
}


CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { addComment }
)(CommentForm);
