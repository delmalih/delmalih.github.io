// React Component
import React from 'react';
import ReactDOM from 'react-dom';

// Styletron requirement
import Styletron from 'styletron-client';
import { StyletronProvider } from 'styletron-react';

// Layout
import 'bootstrap/dist/css/bootstrap.css'; // Bootstrap
import 'font-awesome/css/font-awesome.css'; // FontAwesome
import 'react-vertical-timeline-component/style.min.css'; // Vertical Timeline

// Local
import Home from './views/';

// Styletron magic
const styleSheet = document.createElement('style');
document.head.appendChild(styleSheet);
const styletron = new Styletron([styleSheet], { prefix: 'st-' });

const App = () => (
  <StyletronProvider styletron={styletron}>
    <Home />
  </StyletronProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
