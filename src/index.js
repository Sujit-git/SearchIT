import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom'
import './global.css'
import { ResultContextProvider } from './context/ResultContextProvider';
import App from './App'


ReactDOM.render(
    <ResultContextProvider>
        <Router>
            <App />
        </Router>
    </ResultContextProvider>
    , document.getElementById('root')
);