import React, { Component } from 'react';

class TypeAheadResults extends Component {
  static propTypes = { posts: React.PropTypes.array };
  static defaultProps = { posts: [] };

  render() {
    let postListItems = this.props.posts.map((post) => {
        return (
          <li key={post.ID}>{post.title}</li>
        );
      });

    return (
      <ol>
        {postListItems}
      </ol>
    );

  }
}

export default TypeAheadResults;
