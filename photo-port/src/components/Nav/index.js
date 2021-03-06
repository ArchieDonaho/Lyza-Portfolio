import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

// function categorySelected(name) {
//   console.log(`${name} clicked`);
// }

function Nav(props) {
  // destructure the props sent through from app to allow us to change the category
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected,
  } = props;

  // using useEffect, when the state of currentCategory changes,the document.title will re-render with a new title
  // we can't simply just change it, since the page cannot re-render unless we use states to do it
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header>
      <h2>
        <a data-testid='link' href='/'>
          <span role='img' aria-label='camera'>
            📸
          </span>{' '}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className='flex-row'>
          <li className='mx-2'>
            <a
              data-testid='about'
              href='#about'
              // change state in the App to render the Gallery & About components
              onClick={() => setContactSelected(false)}
            >
              About me
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span
              // change state in the App to render the Contact form component
              onClick={() => setContactSelected(true)}
            >
              Contact
            </span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                // if true, then "navActive" will be returned
                currentCategory.name === category.name &&
                !contactSelected &&
                'navActive'
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  // change the category of the images
                  setCurrentCategory(category);
                  // remove the contact form if it is displaying
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
