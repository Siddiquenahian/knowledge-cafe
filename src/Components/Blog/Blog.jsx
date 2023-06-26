import React, { useEffect, useState } from 'react';
import './Blog.css';
import Content from '../Blog-Content/Content';
import Note from '../Side-Note/Note';

const Blog = () => {
  const [contents, setContents] = useState([]);
  const [readTime, setReadTime] = useState([]);
  const [bookMark, setBookMark] = useState([]);
  useEffect(() => {
    fetch('blogs.json')
      .then((res) => res.json())
      .then((data) => setContents(data));
  }, []);

  const handleReadTime = (readTime) => {
    const previousReadTime = JSON.parse(localStorage.getItem('readTime'));
    if (previousReadTime) {
      const newReadTime = previousReadTime + readTime;
      localStorage.setItem('readTime', newReadTime);
      setReadTime(newReadTime);
    } else {
      localStorage.setItem('readTime', readTime);
      setReadTime(readTime);
    }
  };

  const handleBookMark = (content) => {
    const newBookMark = [...bookMark, content];
    setBookMark(newBookMark);
  };

  return (
    <div className="blog-container">
      <div className="blog-content">
        {contents.map((content) => (
          <Content
            key={content.id}
            content={content}
            handleReadTime={handleReadTime}
            handleBookMark={handleBookMark}
          ></Content>
        ))}
      </div>
      <div className="side-note">
        <Note readTime={readTime} bookMark={bookMark}></Note>
      </div>
    </div>
  );
};

export default Blog;
