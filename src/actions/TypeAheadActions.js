import alt              from '../alt';
import TypeAheadFetcher from '../utils/TypeAheadFetcher';

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

export default alt.createActions(TypeAheadActions);
