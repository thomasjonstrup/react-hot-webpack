/*global module*/

//import styles from './app.css';
import React from 'react';
import ReacDOM from 'react-dom';

const title = 'My React Webpack';

ReacDOM.render(
	<div>{title}</div>,
	document.getElementById('app')
);

module.hot.accept();
