import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeSearchTags, removeSearchTags, changeSearchDuration} from '../../../redux/filtersRedux';

// map redux's state to component's props;  
const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

// map redux's functions(which dispach actions to store) to component's props;
const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  changeSearchTags: tags => dispatch(changeSearchTags(tags)),
  removeSearchTags: tags => dispatch(removeSearchTags(tags)),
  changeSearchDuration: duration => dispatch(changeSearchDuration(duration)), // ?? (duration) - payload
  
  // TODO - add more dispatchers for other filters
});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
