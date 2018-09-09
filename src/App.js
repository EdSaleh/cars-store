import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import"./App.css";
import {AVAILABILITY_FETCH, CARS_FETCH, SORT} from './sagas' 

export const SORT_NAME = 'name';
export const SORT_AVAILABILITY = 'availability' 

class App extends Component {
  constructor(props) {
    super(props);
    const  { onCars }  = this.props;
    onCars();
    setInterval(()=>{
      const { cars, onAvailability } = this.props;
      cars.map(car=>onAvailability(car.id))
    },2000);
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

  render() {
    const  { cars, sort, onSort }  = this.props;
    return (
      <div className='grid'>
        <div id='filter-group'>
          <span>Filter: </span>
          <select defaultValue={sort} onChange={(e)=>onSort(e.currentTarget.value)}>
            {[SORT_NAME, SORT_AVAILABILITY].map((option, i) => <option key={i}>{option}</option>)}
          </select>
        </div>
        {cars.map((car, i)=>
          <article key={i}>
            <img src={car.img} alt=""></img>
            <div>
              <h2>{car.name}</h2>
              <h3>Make: {car.make}</h3>
              <h3>Model: {car.model}</h3>
              <h3>{car.availability}</h3>
              {
                (car.availability==='Available')?<button>Buy</button>:<span></span>
              }
            </div>
          </article>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    onCars: () => dispatch({ type: CARS_FETCH }),
    onAvailability: (id) => dispatch({ type: AVAILABILITY_FETCH, payload:id }),
    onSort: (name) => dispatch({ type: SORT, payload:name })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);