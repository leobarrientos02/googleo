import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App.js';
import { ResultContextProvider } from './contexts/ResultContextProvider';
import './index.css';

ReactDom.render(
    <ResultContextProvider>
        <Router>
            <App />
        </Router>
    </ResultContextProvider>
, document.getElementById('root')
);