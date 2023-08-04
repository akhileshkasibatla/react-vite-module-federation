import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';

const root = document.getElementById('root') as HTMLElement;
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  root
);
