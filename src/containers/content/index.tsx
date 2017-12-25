import { connect, Dispatch } from 'react-redux';
import { Content } from './content';
import { itemsActions } from '../../actions/items.action';
import { CoureseStore } from '../../store/root.store';


// tslint:disable-next-line
const mapStateToProps = (state:CoureseStore) => ({
  items: state.items,
  searchTerm: state.searchTerm
});

// tslint:disable-next-line
const mapDispatchToProps = (dispatch: Dispatch<Function>) => ({
  getItems: () => dispatch(itemsActions.getItems())
});

// tslint:disable-next-line
export default connect(mapStateToProps, mapDispatchToProps)(Content);