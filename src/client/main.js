/*eslint no-unused-vars: 0*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
require ('./utils/GlobalWindowManager'); 

ReactDOM.render((require('./router')), document.getElementById('app'));
