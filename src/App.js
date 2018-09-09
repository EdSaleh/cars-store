import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as styles from "./App.css";
import {AVAILABILITY_FETCH, CARS_FETCH, SORT} from './sagas' 

export const SORT_NAME = 'name';
export const SORT_AVAILABILITY = 'availability' 

class App extends Component {

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
    const  { cars, sort, onSort, onCars }  = this.props;
    return (
      <div>
        <button onClick={onCars}></button>
        <main className={styles['grid']}>
          <div id={styles['filter-group']}>
            <span>Filter: </span>
            <select defaultValue={sort}>
              {[SORT_NAME, SORT_AVAILABILITY].map((option, i) => <option key={i} onSelect={onSort} >{option}</option>)}
            </select>
          </div>
          {cars.map((car, i)=>
            <article key={i}>
              <img src={car.img} alt=""></img>
              <div>
                <h2>{car.name}</h2>
                <p className={styles['text']}>
                  <div>Make: {car.make}</div>
                  <div>Model: {car.model}</div>
                  <div>{car.availability}</div>
                  {
                    (car.availability==='Available')?<button>Buy</button>:<span></span>
                  }
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
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    onCars: () => dispatch({ type: CARS_FETCH }),
    onAvailability: (id) => dispatch({ type: AVAILABILITY_FETCH, payload:id }),
    onSort: (name) => dispatch({  type: SORT, payload:name}),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);