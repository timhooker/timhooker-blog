// Interface
import { Post } from './models/post';
// Framework
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Components
import { Nav } from './components/nav';
import { PostView } from './components/post/show';
import { Home } from './pages/home';
import { getPosts } from './api/posts';
// Assets
import './App.css';

class App extends React.Component<any, any> {
  private postRef: HTMLDivElement | null;

  constructor(props: {}) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
      getPosts().then(res => {
        this.setState({posts: res});
      });
  }

  scrollToPosts() {
    if (this.postRef) {
      this.postRef.scrollIntoView({behavior: 'smooth'});
    }
  }

  render() {
    const {posts} = this.state;
    return (
      <Router>
        <div className="Blog">
          <Nav />
          <Route />
          <div>
            <Route
              exact={true}
              path="/"
              render={() => (
                <div>
                  <Home 
                    scrollDown={() => this.scrollToPosts()}
                    posts={this.state.posts}
                    postsRef={(div: any) => this.postRef = div} 
                  />
                </div>
              )}
            />
            <Route 
              path="/posts/:postId" 
              render={({match}) => {
                const post: Post = posts.find((p: Post) => p.id && p.id.toString() === match.params.postId);
                // console.log(match.params.postId, post);
                return post ? (
                  <PostView 
                    title={post.title} 
                    html={post.html} 
                    id={post.id}
                    tags={post.tags}
                    published_date={post.published_date}
                  />
                  ) :  null;
              }} 
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
