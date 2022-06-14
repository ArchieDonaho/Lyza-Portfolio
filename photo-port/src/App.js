import React, { useState } from 'react';
import './App.css';
// import our components
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';

function App() {
  /*
  What happens behind the scenes:
  React.createElement('div', {}, [ React.createElement('h1',{}, 'ginger'), React.createElement('p', {}, 'breed: Brittany Spaniel') ])
  */
  // create an object array of the categories. Creating a useState with no setter offers no advantages
  const [categories] = useState([
    {
      name: 'commercial',
      description:
        'Photos of grocery stores, food trucks, and other commercial projects',
    },
    {
      name: 'portraits',
      description: 'Portraits of people in my life',
    },
    {
      name: 'landscape',
      description: 'Fields, farmhouses, waterfalls, and the beauty of nature',
    },
  ]);

  // using state, set the current category to 'commercial'
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
