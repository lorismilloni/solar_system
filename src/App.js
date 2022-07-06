import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <main>
        <header>
          <Header />
        </header>
        <article>
          <SolarSystem />
          <Missions />
        </article>
      </main>
    );
  }
}

export default App;
