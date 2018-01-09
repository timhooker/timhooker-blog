interface Post {
  title: string;
  html: string;
  markdown: string;
  id?: number;
  published_at?: string;
  status: 'draft' | 'published';
  tags: Array<string>;
}
interface Posts {
  posts?: Array<Post>;
}

export { Post, Posts };