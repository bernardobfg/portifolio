import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { SetThemeProvider } from "./SetThemeProvider";

ReactDOM.render(
  <React.StrictMode>
    <SetThemeProvider>
      <App />
    </SetThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

