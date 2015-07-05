import alt              from '../alt';
import TypeAheadActions from '../actions/TypeAheadActions';

class TypeAheadStore {
  constructor() {
    this.bindListeners({
      handleUpdateTypeAhead: TypeAheadActions.updateResults
    });

    this.state = {
      results: []
    }
  }

  handleUpdateTypeAhead(results) {
    this.setState({results});
  }
}

export default alt.createStore(TypeAheadStore, 'TypeAheadStore');
