import * as React from 'react';
import './Post.css';
import { Post } from '../../models/post';
import { parseDate } from '../../helpers/date';
import * as showdown from 'showdown';
// import { Link } from 'react-router-dom';

function PostView({title, html, id, published_date}: Post) {
  const date = parseDate(published_date);
  return (
    <section className="Post ">
      <h1 className="Post__title">{title}</h1>
      <h4 className="Post__date">{date}</h4>
      <p className="Post__content">{html}</p>
    </section>
  );
}

export { PostView };