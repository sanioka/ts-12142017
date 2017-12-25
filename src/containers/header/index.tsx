import { connect, Dispatch } from 'react-redux';
import { searchActions } from '../../actions/search-term.action';
import { Header } from './header';

// tslint:disable-next-line
const mapDispatchToProps = (dispatch: Dispatch<Function>) => ({
  onSearch: (value: string) => dispatch(searchActions.onUpdateSearch(value))
});

// tslint:disable-next-line
export default connect(null, mapDispatchToProps)(Header);