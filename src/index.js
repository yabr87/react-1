import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const el1 = <span>привет</span>;
// const el2 = <span>мир</span>;

// const element = React.createElement('div', { a: 5, b: 10, children: [el1, ' ', el2] });
// const element = (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//         Learn React
//       </a>
//     </header>
//   </div>
// );
