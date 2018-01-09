import { Posts } from '../models/post';

function getPosts(): Promise<Posts> {
  return fetch('http://localhost:3000/api/v1/posts.json')
    .then(res => res.json())
    .catch(console.log);
}

export { getPosts };