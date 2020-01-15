import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import './index.css';

ReactDOM.render(
    <ThemeProvider>
        <CssBaseline />
        <App />
    </ThemeProvider>, 
    document.getElementById('root')
);
