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

TypeAheadResults.propTypes = { posts: React.PropTypes.array };
TypeAheadResults.defaultProps = { posts: [] };

module.exports = TypeAheadResults;
