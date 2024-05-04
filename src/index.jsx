import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.jsx';
import Youtube from './service/youtube.js';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const httpClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { key: import.meta.env.VITE_YOUTUBE_API_KEY },
});
const youtube = new Youtube(httpClient);

const $root = document.querySelector('#root');

createRoot($root).render(
  <React.StrictMode>
    <Router>
      <App youtube={youtube} />
    </Router>
  </React.StrictMode>
);
