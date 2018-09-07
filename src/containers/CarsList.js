import { connect } from 'react-redux';

import CarsList from 'components/cars-list';

function mapStateToProps(state) {
  return {
    state: state.state,
  };
}

export default connect(mapStateToProps)(CarsList);
