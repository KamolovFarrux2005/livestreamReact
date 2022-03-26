import React, { useState, useEffect } from 'react';
import Main from '../../components/Main/main';
import './Categories.css'

const Categories = () => {

  return (
    <div className='categories'>
      <p className='recomended'>Recommended</p>
      <Main />
    </div>
  );
}

export default Categories;
