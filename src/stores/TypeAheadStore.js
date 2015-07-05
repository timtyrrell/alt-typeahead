import alt                from '../alt';
import { decorate, bind } from 'alt/utils/decorators'
import TypeAheadActions   from '../actions/TypeAheadActions';

@decorate(alt)
class TypeAheadStore {
  constructor() {
    this.state = {
      results: []
    }
  }

  @bind(TypeAheadActions.updateResults)
  handleUpdateTypeAhead(results) {
    this.setState({results});
  }
}

export default alt.createStore(TypeAheadStore, 'TypeAheadStore');
