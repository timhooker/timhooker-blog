import * as React from 'react';
import { Logo } from '../../components/logo';
import { PostList } from '../../components/post';

const backdrop = require('./backdrop.jpg');

function Home({posts, scrollDown, postsRef, headerRef}: any) {
  return (
    <div>
      <header 
        className="Blog-header" 
        style={{'backgroundImage': `url(${backdrop})`}}
        ref={headerRef}
      >
        <h1 className="Blog-title">
          <Logo fill="#fff" className="Blog-logo" />
          <span>Tim Hooker - Software Engineer</span>
        </h1>
        <div className="Blog-intro">
          Thoughts, stories and ideas about building the bits of the internet you can see.
        </div>
        <button
          className="Blog-header__arrow-down" 
          onClick={scrollDown} 
        >Scroll
        </button>
      </header>
      <PostList 
        posts={posts} 
        postsRef={postsRef}
      />
    </div>
  );
}

export { Home };