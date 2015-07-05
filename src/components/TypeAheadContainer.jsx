import AltContainer         from 'alt/AltContainer';
import React, { Component } from 'react';
import TypeAhead            from './TypeAhead.jsx';
import TypeAheadActions     from '../actions/TypeAheadActions';
import TypeAheadStore       from '../stores/TypeAheadStore';

class TypeAheadContainer extends Component {
  render() {
    return (
      <AltContainer
        store={TypeAheadStore}
        actions={TypeAheadActions}
      >
        <TypeAhead />
      </AltContainer>
    );
  }
}

export default TypeAheadContainer;
