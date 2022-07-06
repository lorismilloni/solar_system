import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../style/solarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="planets" data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map(({ name, image }) => (
          <PlanetCard key={ name } planetName={ name } planetImage={ image } />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
