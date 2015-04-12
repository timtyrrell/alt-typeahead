var alt = require('../alt');
var TypeAheadFetcher = require('../utils/TypeAheadFetcher');

class TypeAheadActions {
  constructor() {
    this.generateActions('updateResults')
  }

  fetchResults(searchTerm) {
    TypeAheadFetcher.fetch(searchTerm)
      .then((results) => {
        this.actions.updateResults(results);
      })
      .catch((errorMessage) => {
        console.log(errorMessage);
      });
  }
}

module.exports = alt.createActions(TypeAheadActions);
