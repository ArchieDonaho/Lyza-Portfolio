import React from 'react';
import { render, cleanup } from '@testing-library/react';
// render will render the components. Jest creates a virtual DOM in Node
// cleanup removes components from the DOM to prevent memory leak & data collisions between tests
import '@testing-library/jest-dom/extend-expect';
// offers access to custom matchers that are used to test DOM elements
import About from '..';

afterEach(cleanup); // clean up after each test is ran

describe('About component', () => {
  // verify the About component is rendering
  it('renders', () => {
    render(<About />);
  });

  // compare the expected and resulting DOM snapshots
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});
