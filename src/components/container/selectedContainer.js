import { connect } from 'react-redux';
import { campuses } from './Campuses';
import {selected, unselected} from './components/actions';

// const mapStateToProps = (state) => {
//   return {
//     campuses: state.campuses.selected

//   };
// };

//Map state to match properties of the component
const mapStateToProps = state => ({
  campuses: state.campuses.selected
});

const mapDispatchToProps = () => {

  return {
    selected: () => dispatchEvent(unselected()),
    unselected: () => dispatchEvent(unselected()),
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(campuses);
