import React, { useState } from "react";

const NewReviewFormTile = (props) => {
  const [newReview, setNewReview] = useState({
    title: '',
    body: ''
  })

  const validateForm = () => {

  }

  const clearForm = () => {
    setNewReview({
      title: '',
      body: ''
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const holdTitle = newReview.title
    const holdBody = newReview.body
    validateForm()
    if (props.createNewReview(newReview)) {
      clearForm()
    } else {
      setNewReview({
        title: holdTitle,
        body: holdBody
      })
    }
  }

  const handleChange = (event) => {
    const fieldTracking = event.currentTarget.name
    setNewReview({
      ...newReview,
      [fieldTracking]: event.currentTarget.value
    })
  }

  return (
    <form className="new-review-form" onSubmit={handleSubmit}>
      <label>
        {/* add fields */}
      </label>

      <input type="submit" value="Add Review"/>
    </form>
  )
}

export default NewReviewFormTile