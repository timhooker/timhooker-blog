import * as React from 'react';
import './nav.css';
import { Link, Route } from 'react-router-dom';
import { Logo } from '../logo';

function Nav() {
  return (
    <nav className="blog-nav">
      <Route 
        path="/posts/:postId"
        render={() => {
          return (
            <li className="blog-nav__item">
              <Link 
                to="/" 
                className="blog-nav__item-link"
              >
                <Logo 
                  fill="#000" 
                  className="blog-nav__logo" 
                  alt="Home" 
                />
              </Link>
            </li>
          );
        }}
      />
    </nav>
  );
}

export { Nav };