import AltContainer         from 'alt/AltContainer';
import React, { Component } from 'react';
import TypeAhead            from './TypeAhead.jsx';
import TypeAheadActions     from '../actions/TypeAheadActions';
import TypeAheadStore       from '../stores/TypeAheadStore';

class TypeAheadContainer extends Component {
  render() {
    return (
      <AltContainer
        component={TypeAhead}
        store={TypeAheadStore}
        actions={TypeAheadActions}
      />
    );
  }
}

export default TypeAheadContainer;
