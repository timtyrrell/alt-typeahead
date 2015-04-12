var alt = require('../alt');
var TypeAheadActions = require('../actions/TypeAheadActions');

class TypeAheadStore {
  constructor() {
    this.bindAction(TypeAheadActions.updateResults, this.handleUpdateTypeAhead);

    this.results = [];
  }

  handleUpdateTypeAhead(results) {
    this.results = results;
  }
}

module.exports = alt.createStore(TypeAheadStore);
