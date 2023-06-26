import React, { useEffect, useState } from 'react';
import './Note.css';

const Note = (props) => {
    const readTime = props.readTime;
    const bookMark = props.bookMark;
    const [time, setTime]=useState(readTime);

    useEffect(()=>{
        const totalReadTime = localStorage.getItem('readTime');
        setTime(totalReadTime);
    }, [readTime]);
    return (
      <div className="note">
        <div className="spent-time">
          <h4>Spent time on Read: {time}min</h4>
        </div>
        <div className="bookmarked">
          <h4>Bookmarked Blogs: {bookMark.length}</h4>
          <div>
            {bookMark.map((data,jiu, hi) => (
              <p
                key={jiu}
              >
                {data.blogTitle}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Note;