import React from 'react';
import './App.css';
import About from './components/About'; // import our component
import Nav from './components/Nav'; // import our component

function App() {
  /*
  What happens behind the scenes:
  React.createElement('div', {}, [ React.createElement('h1',{}, 'ginger'), React.createElement('p', {}, 'breed: Brittany Spaniel') ])
  */
  return (
    <div>
      <Nav></Nav> {/* use our Nav function that was imported */}
      <main>
        <About></About> {/* use our About function that was imported */}
      </main>
    </div>
  );
}

export default App;
