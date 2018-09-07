import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as styles from './styles';

export const SORT_NAME = 'name';
export const SORT_AVAILABILITY = 'availability' 

class CarsList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  static propTypes = {
    cars: PropTypes.arrayOf(PropTypes.shape({
      picture: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      make: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      availability: PropTypes.oneOf(['Unavailabile', 'Available', 'Out of Stock']),
    })),
    sort: PropTypes.oneOf([SORT_NAME, SORT_AVAILABILITY]),
    onCars: PropTypes.func.isRequired,
    onAvailability: PropTypes.func.isRequired,
    onSort: PropTypes.func.isRequired
  }

  static defaultProps = {
    cars:[],
    sort:'name'
  }

  render() {
    const  { cars, sort, onCars, onAvailability, onSort }  = this.props;
    return (
      <div className={styles['grid']}>
        <select id="" onClick={""}>
          <option></option>
        </select>
        {cars}
        {sort} {onCars} {onAvailability} {onSort}
        <main className="grid">
          <article>
            <img src="" alt=""></img>
            <div className="text">
              <h3>Seamlessly visualize quality</h3>
              <p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
              <button> </button>
            </div>
          </article>
        </main>

      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cars: state.cars }
}
function mapDispatchToProps(dispatch) {
  return {
    onCars: () => dispatch({ type: "API_CALL_REQUEST" }),
    onAvailability: (id) => dispatch({ type: "API_CALL_REQUEST", payload:id }),
    onSort: (name) => dispatch({ type: "API_CALL_REQUEST", payload:name}),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsList);