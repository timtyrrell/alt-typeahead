import alt              from '../alt';
import TypeAheadActions from '../actions/TypeAheadActions';

class TypeAheadStore {
  constructor() {
    this.bindAction(TypeAheadActions.updateResults, this.handleUpdateTypeAhead);

    this.results = [];
  }

  handleUpdateTypeAhead(results) {
    this.results = results;
  }
}

export default alt.createStore(TypeAheadStore);
