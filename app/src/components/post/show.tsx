import * as React from 'react';
import './post.css';
import { Post } from '../../models/post';
import { parseDate } from '../../helpers/date';
import * as ReactMarkdown from 'react-markdown';

// import { Link } from 'react-router-dom';

function PostView({title, markdown, id, published_at}: Post) {
  const date = parseDate(published_at);
  return (
    <section className="Post ">
      <h1 className="Post__title">{title}</h1>
      <h4 className="Post__date">{date}</h4>
      <ReactMarkdown className="Post__content" source={markdown} />
    </section>
  );
}

export { PostView };