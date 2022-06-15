import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function About() {
  return (
    <section className='my-5'>
      {/* we use classname instead of class b/b js already uses class */}
      <h1 id='about'>Who am I?</h1>
      <img
        src={coverImage}
        className='my-2'
        style={{ width: '100%' }}
        alt='cover'
      />
    </section>
  );
}

export default About;
