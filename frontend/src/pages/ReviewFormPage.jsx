import React from "react"
import "./ReviewFormPage.css"

export const ReviewPage = () => {
  return (
    <div className="review-page">
      <div className="div">
        <div className="section">
          <div className="container">
            <div className="title">Review Details</div>
            <div className="description">Provide your review details</div>
            <div className="input">
              <div className="text-wrapper">Anime Title</div>
              <div className="textfield">
                <div className="text">Enter the anime title</div>
              </div>
            </div>
            <div className="input-2">
              <div className="text-wrapper">Number of Stars</div>
              <div className="textfield">
                <p className="text">Rate the anime from 1 to 5 stars</p>
              </div>
            </div>
            <div className="input-3">
              <div className="text-wrapper">Comment</div>
              <div className="textfield">
                <div className="text">Share your review here</div>
              </div>
            </div>
            <button className="button">
              <div className="primary">
                <div className="title-2">Submit</div>
              </div>
            </button>
          </div>
          <img className="vector" alt="Vector" src="vector-200.svg" />
        </div>
        <div className="section-2">
          <div className="container-2">
            <div className="title-3">Recent Reviews</div>
            <p className="p">See what others are saying</p>
          </div>
          <div className="list">
            <div className="card">
              <div className="user">
                <div className="avatar">
                  <div className="avatar-2" />
                  <div className="frame">
                    <div className="title-4">User123</div>
                  </div>
                </div>
              </div>
              <div className="title-5">Great anime, highly recommend!</div>
            </div>
            <div className="card">
              <div className="user">
                <div className="avatar">
                  <div className="avatar-2" />
                  <div className="frame">
                    <div className="title-4">AnimeFanatic</div>
                  </div>
                </div>
              </div>
              <p className="title-5">Average anime, had some good moments</p>
            </div>
          </div>
          <img className="img" alt="Vector" src="image.svg" />
        </div>
      </div>
    </div>
  )
}

export default ReviewPage