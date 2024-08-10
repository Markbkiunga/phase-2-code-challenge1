import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

document.addEventListener('DOMContentLoaded', () => {
  // Simulate an API request or any async operation
  setTimeout(() => {
    hideLoader();
    showContent();
  }, 2000); // Replace with your actual data loading logic and time

  function hideLoader() {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
  }

  function showContent() {
    const content = document.getElementById('content');
    content.style.display = 'contents';
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
