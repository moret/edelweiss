import React from 'react';
import ReactDOM from 'react-dom';

import Heli from './Heli';
import Car from './Car';

ReactDOM.render(
  <div>
    <hr />
    <Car model="rioCab" />
    <hr />
    <Car model="ferrari" />
    <hr />
    <Heli />
    <hr />
  </div>,
  document.getElementById('react-root')
);
