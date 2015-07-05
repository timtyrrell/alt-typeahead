import React, { Component } from 'react';
import TypeAheadStore       from '../stores/TypeAheadStore';
import TypeAheadActions     from '../actions/TypeAheadActions';
import TypeAheadResults     from './TypeAheadResults.jsx';

class TypeAhead extends React.Component {
  constructor() {
    super();
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

  onChange = () => {
    this.setState(this.getStoreState());
  }

  triggerSearch = (e) => {
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

export default TypeAhead;
