import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addPost } from '../../actions/post'


const PostForm = ({ addPost }) => {

  const [text, setText] = useState('')


  return (
    <div id="postform-center">
      <form onSubmit={
        (e) => {
          e.preventDefault()
          addPost({ text })
          setText('')
        }
      }>
        <div className="form-group">
          <label>Post text</label>
          <textarea className="form-control" name="text" value={text} onChange={ (e) => setText(e.target.value) }rows="3" required></textarea>
        </div>
        <button value="Submit" type="submit" className="btn btn-primary" id='post-submit'>Submit</button>
      </form>
    </div>
  )


}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
}


export default connect(null, { addPost })(PostForm)
