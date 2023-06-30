import React from 'react';
import PropTypes from 'prop-types';
import '../style/planetCard.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div class="card section column has-background-warning" data-testid="planet-card">
        <p class="card-header-title" data-testid="planet-name">{planetName}</p>
        <div  class="card-image">
          <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        </div>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
