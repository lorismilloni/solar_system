import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div class="card section column has-background-primary">
        <div class="card-content box" style={{width: "200px"}} className="missions-cards" data-testid="mission-card">
          <p class="card-header-title" data-testid="mission-name">{name}</p>
          <p class="subtitle is-6" data-testid="mission-year">{year}</p>
          <p class="subtitle is-6" data-testid="mission-country">{country}</p>
          <p class="subtitle is-6" data-testid="mission-destination">{destination}</p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
