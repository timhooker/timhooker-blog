import * as React from 'react';
import './post.css';
import { Link } from 'react-router-dom';
import { Posts } from '../../models/post';
import { parseDate } from '../../helpers/date';
import * as ReactMarkdown from 'react-markdown';

interface PostList extends Posts {
  postsRef?: (div: any) => void;
}

function PostList({posts, postsRef}: PostList) {
  const postList = posts ? posts.sort((p, c) => {
    const d1: any = p.published_at || 0;
    const d2: any = c.published_at || 0;
    return d1 - d2;
  }) : [];
  return (
    <div className="Post-list" ref={postsRef}>
      {postList.map(({title, markdown, id, published_at, status}, i) => {
        const date = parseDate(published_at);
        if (status === 'draft') { return null; }
        return (
          <section className="Post-list__item" key={`post-${id}`}>
            <h2 className="Post-list__item-title"><Link to={`/posts/${id}`}>{title}</Link></h2>
            <p>
              <ReactMarkdown
                className="Post-list__item-content"
                source={markdown.slice(0, 150)} 
                disallowedTypes={['heading']}
                unwrapDisallowed={true}
              /> 
              &nbsp;&nbsp;
              <Link 
                className="Post-list__item-link" 
                to={`/posts/${id}`}
              >>>
              </Link>
            </p>
            <p className="Post-list__item-date">{date}</p>
          </section>
        );
      })}
    </div>
  );
}

export { PostList };
