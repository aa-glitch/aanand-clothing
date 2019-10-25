import React from 'react';
import './homepage.styles.scss';

const Homepage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>HATS</h1>
          <span className='subtitle'>Womens Hats</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Jeans</h1>
          <span className='subtitle'>Womens Jeans</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Shorts</h1>
          <span className='subtitle'>Womens Shorts</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>Shirts</h1>
          <span className='subtitle'>Womens Shirts</span>
        </div>
      </div>

      <div className='menu-item'>
      <div className='content'>
        <h1 className='title'>Tops</h1>
        <span className='subtitle'>Womens Tops</span>
      </div>
    </div>

    </div>
  </div>
)

export default Homepage;