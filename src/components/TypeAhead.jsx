import React, { Component } from 'react';
import TypeAheadResults     from './TypeAheadResults.jsx';

class TypeAhead extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.refs.searchTermInput.getDOMNode().focus()
  }

  triggerSearch = (e) => {
    this.props.fetchResults(e.target.value);
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
        <TypeAheadResults posts={this.props.results} />
      </div>
    );
  }
}

export default TypeAhead;
