import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import * as styles from './styles';

class HelloReact extends PureComponent {
  static propTypes = {
    cars: PropTypes.arrayOf(PropTypes.shape({
      picture: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      make: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      availability: PropTypes.oneOf(['Unavailabile', 'Available', 'Out of Stock']),
    })),
    sort: PropTypes.oneOf(['name', 'availability'])
  }
  static defaultProps = {
    cars:[],
    sort:'name'
  }
  render() {
    const { cars } = this.props;
    return (

      <div className={styles['grid']}>
        <select id="" onClick={""}>
          <option></option>
        </select>
        {cars}
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

export default HelloReact;
