import React, { useState } from 'react';
import './App.css';
// import our components
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
  /*
  What happens behind the scenes:
  React.createElement('div', {}, [ React.createElement('h1',{}, 'ginger'), React.createElement('p', {}, 'breed: Brittany Spaniel') ])
  */

  // initialize the state for the contact form to false
  const [contactSelected, setContactSelected] = useState(false);

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
        // pass through the getter & setter to the Nav component to allow it to modify the state in the App component
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {/* equates to an "if-else" statement (ternary operator) */}
        {!contactSelected ? (
          // "<></>" are React fragments (<React.Fragment></React.Fragment>). Normally, only 1 parent can be returned, but this allows multiple to be grouped together w/o using a div
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
