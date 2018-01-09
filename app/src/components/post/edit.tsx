import * as React from 'react';
import './post.css';
import './post-edit.css';
import { Post } from '../../models/post';
import { parseDate } from '../../helpers/date';
import * as ReactMarkdown from 'react-markdown';
// import 'react-mde/lib/styles/css/react-mde-preview.css';

// import { Link } from 'react-router-dom';
interface PostEdit extends Post {
  onSubmit: any;
}

class PostEdit extends React.Component<any, any> {
  constructor(props: PostEdit) {
    super(props);
    this.state = {
      ...props
    };
  }
  render() {
    const {title, markdown, published_at, onSubmit} = this.state;
    const date = parseDate(published_at);
    return (
      <div className="Post-edit">
        <div className="Post-edit__header">
          <h1 className="Post__title">{title}</h1>
          <h4 className="Post__date">{date}</h4>
          <button className="Post-edit__header-submit" >Save</button>
        </div>
        <form className="Post-edit__form" onSubmit={onSubmit}>
          <div className="Post-edit__content">
            <textarea
              className="Post-edit__text-area"
              value={markdown}
              onChange={e => this.setState({markdown: e.target.value})}
            />
            <ReactMarkdown className="Post-edit__shadow-content" source={markdown} />
          </div>
        </form>
        <div className="Post-edit__preview">
          <ReactMarkdown className="Post__content" source={markdown} />
        </div>
      </div>
    );
  }
}

export { PostEdit };