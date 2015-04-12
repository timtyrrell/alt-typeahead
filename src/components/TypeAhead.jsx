var React = require('react');
var TypeAheadStore = require('../stores/TypeAheadStore');
var TypeAheadActions = require('../actions/TypeAheadActions');
var TypeAheadResults = require('./TypeAheadResults.jsx');

class TypeAhead extends React.Component {
  constructor() {
    this.onChange = this.onChange.bind(this);
    this.triggerSearch = this.triggerSearch.bind(this);
    this.state = this.getStoreState();
  }

  getStoreState() {
    return {
      results: TypeAheadStore.getState().results
    };
  }

  componentDidMount() {
    this.refs.searchTermInput.getDOMNode().focus()
    TypeAheadStore.listen(this.onChange);
  }

  componentWillUnmount() {
    TypeAheadStore.unlisten(this.onChange);
  }

  onChange() {
    this.setState(this.getStoreState());
  }

  triggerSearch(e) {
    TypeAheadActions.fetchResults(e.target.value);
  }

  render() {
    return (
      <div>
        <form>
          <input
              type="text"
              placeholder="Search..."
              ref="searchTermInput"
              onChange={this.triggerSearch}
          />
        </form>
        <TypeAheadResults posts={this.state.results} />
      </div>
    );
  }
}

module.exports = TypeAhead;
