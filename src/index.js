import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/main.css';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: [
      'Commissioner:400,500,700:latin-ext',
      'Merriweather+Sans:400,700:latin-ext',
    ]
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
