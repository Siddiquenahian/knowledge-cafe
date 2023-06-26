
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import './Content.css'

const Content = (props) => {

    const [buttonClickCounts, setButtonClickCounts] = useState({});


    const {id, name, blogTitle, blogCoverImage, authorImage, readTime, publishDate} = props.content;
    const handleReadTime = props.handleReadTime;
    const handleBookMark = props.handleBookMark;


    const handleClick = (buttonId) => {
      const updatedCounts = { ...buttonClickCounts };
      updatedCounts[buttonId] = updatedCounts[buttonId]
        ? updatedCounts[buttonId] + 1
        : 1;

      if (updatedCounts[buttonId] === 2) {
        toast(`Button ${buttonId} clicked for the second time!`);
      }

      setButtonClickCounts(updatedCounts);
    };


    return (
      <div className="content">
        <img className="cover-img" src={blogCoverImage} alt="" />
        <div>
          <div className="content-details">
            <div className="left-side">
              <img className="author-img" src={authorImage} alt="" />
              <div className="name-and-date">
                <h4>{name}</h4>
                <p>{publishDate}</p>
              </div>
            </div>
            <div className="right-side">
              <p>{readTime} min read</p>
              <button
                onClick={() => {
                    handleBookMark(props.content);
                    handleClick(id);

                }}
                className="btn-bookmark"
              >
                <FontAwesomeIcon icon={faBookmark} />
              </button>
            </div>
          </div>
          <h2>{blogTitle}</h2>
          <button onClick={() => {
            handleReadTime(readTime);
          }} className="btn-mark">
            Mark as read
          </button>
        </div>
      </div>
    );
};

export default Content;