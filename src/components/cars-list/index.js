import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as styles from './styles';
import {AVAILABILITY_FETCH, CARS_FETCH, SORT} from '../../sagas' 


export const SORT_NAME = 'name';
export const SORT_AVAILABILITY = 'availability' 

class CarsList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  static propTypes = {
    cars: PropTypes.arrayOf(PropTypes.shape({
      img: PropTypes.string.isRequired,
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
          {[SORT_NAME, SORT_AVAILABILITY].map((option, i) => <option key={i}>{option}</option>)}
        </select>
        {cars}
        {sort} {onCars} {onAvailability} {onSort}
        <main className="grid">
          {cars.map((car, i)=>
            <article key={i}>
              <img src={car.img} alt=""></img>
              <div className="text">
                <h3>{car.name}</h3>
                <p>
                  <div>Make: {car.make}</div>
                  <div>Model: {car.model}</div>
                  <div>{car.availability}</div>
                </p>
              </div>
            </article>
          )}
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
    onCars: () => dispatch({ type: CARS_FETCH }),
    onAvailability: (id) => dispatch({ type: AVAILABILITY_FETCH, payload:id }),
    onSort: (name) => dispatch({  type: SORT, payload:name}),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsList);