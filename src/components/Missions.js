import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div className="section">
        <Title class="title" headline="Missões" />
        <div className="missions-section columns is-multiline" data-testid="missions">
          {missions.map(({ name, year, country, destination }) => (
            <MissionCard
            key={ name }
            name={ name }
            year={ year }
            country={ country }
            destination={ destination }
            />
            ))}
        </div>
      </div>
    );
  }
}

export default Missions;
