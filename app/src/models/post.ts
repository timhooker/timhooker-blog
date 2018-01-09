interface Post {
  title: string;
  html: string;
  markdown?: string;
  id?: number;
  published_date?: string;
  tags: Array<string>;
}
interface Posts {
  posts?: Array<Post>;
}

export { Post, Posts };