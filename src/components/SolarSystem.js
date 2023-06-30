import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div class="section">
        <Title headline="Planetas" />
        <div class="section columns" data-testid="solar-system">
          {planets.map(({ name, image }) => (
            <PlanetCard key={ name } planetName={ name } planetImage={ image } />
            ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
