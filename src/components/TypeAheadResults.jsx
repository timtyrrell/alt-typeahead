var React = require('react');

class TypeAheadResults extends React.Component {
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

module.exports = TypeAheadResults;
