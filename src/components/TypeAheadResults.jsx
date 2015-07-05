import React, { Component } from 'react';

class TypeAheadResults extends Component {
  static propTypes = { posts: React.PropTypes.array };
  static defaultProps = { posts: [] };

  render() {
    return (
      <ol>
        {this.props.posts.map((post) => {
          return (
            <li key={post.ID}>{post.title}</li>
          );
        })}
      </ol>
    );

  }
}

export default TypeAheadResults;
