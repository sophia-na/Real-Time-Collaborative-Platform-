import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(<App />, document.getElementById('root'));

import { createRoot } from 'react-dom/client';
import App from '../src/App';

// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<App />);
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);

 