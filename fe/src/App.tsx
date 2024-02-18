import { BrowserRouter as Router } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Routes } from './routes';

import { GlobalStyles } from './styles/GlobalStyles';

export function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes />
      <ToastContainer position="bottom-center" />
    </Router>
  );
}
