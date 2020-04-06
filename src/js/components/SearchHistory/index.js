import { connect } from 'react-redux'; 
import SearchHistory from './searchhistory';

function mapStoreToProps(store) {
  return {
    history: store.search.history
  }
}

export default connect(mapStoreToProps)(SearchHistory);