// Interface
import { Post } from './models/post';
// Framework
import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Components
import { Nav } from './components/nav';
import { PostEdit } from './components/post/edit';
import { PostView } from './components/post/show';
import { Home } from './pages/home';
import { getPosts } from './api/posts';
// Assets
import './App.css';

class App extends React.Component<any, any> {
  private postRef: HTMLDivElement | null;
  private headerRef: HTMLDivElement | null;

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
      this.postRef.scrollIntoView({
        behavior: 'smooth', 
        block: 'start',
        inline: 'end'
      });
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
                <Home 
                  scrollDown={() => this.scrollToPosts()}
                  posts={this.state.posts}
                  headerRef={(div: any) => this.headerRef = div} 
                  postsRef={(div: any) => this.postRef = div} 
                />
              )}
            />
            <Route 
              exact={true}
              path="/posts/:postId" 
              render={({match}) => {
                const post: Post = posts.find((p: Post) => p.id && p.id.toString() === match.params.postId);
                return post ? (
                  <PostView 
                    title={post.title} 
                    html={post.html} 
                    markdown={post.markdown}
                    status={post.status} 
                    id={post.id}
                    tags={post.tags}
                    published_at={post.published_at}
                  />
                  ) :  null;
              }} 
            />
            <Route 
              path="/posts/:postId/edit" 
              render={({match}) => {
                const post: Post = posts.find((p: Post) => p.id && p.id.toString() === match.params.postId);
                return post ? (
                  <PostEdit 
                    title={post.title} 
                    html={post.html} 
                    markdown={post.markdown}
                    status={post.status} 
                    id={post.id}
                    tags={post.tags}
                    published_at={post.published_at}
                    onChange={''}
                    onSubmit={''}
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
