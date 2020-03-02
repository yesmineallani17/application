import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

import './Sorting.scss';
import Header from '../Header/Header.js';
import Sidebar from '../Sidebar/Sidebar.js';
import Sorting_main from '../Sorting_main/Sorting_main.js';

const Sorting = () => {
  const { categoryName } = useParams();

 
  return (
    <div className="Sorting_page_container">
      <div className="main_sorting">
        {/* <Header /> 
              <Sidebar/> */}
        <Sorting_main categoryName={categoryName} subCategories={[]} />
      </div>
    </div>
  );
};

export default Sorting;
