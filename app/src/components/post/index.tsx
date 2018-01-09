import * as React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';
import { Posts } from '../../models/post';
import { parseDate } from '../../helpers/date';

interface PostList extends Posts {
  postsRef?: (div: any) => void;
}

function PostList({posts, postsRef}: PostList) {
  return (
    <div className="Post-list">
      {posts && posts.map(({title, html, id, published_date}, i) => {
        const date = parseDate(published_date);
        return (
          <section ref={postsRef} className="Post-list__item" key={`post-${id}`}>
            <h2 className="Post-list__item-title"><Link to={`/posts/${id}`}>{title}</Link></h2>
            <p>{html && html.slice(0, 150)} &nbsp;<Link className="Post-list__item-link" to={`/posts/${id}`}>>></Link></p>
            <p className="Post-list__item-date">{date}</p>
          </section>
        );
      })}
    </div>
  );
}

export { PostList };
