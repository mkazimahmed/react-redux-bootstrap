// Vendor libraries
import React from 'react';
import { render } from 'react-dom';

// Polyfills
import './polyfills';

// Project components
import App from './app';

render(
    <App />,
    document.getElementById('root'),
);
