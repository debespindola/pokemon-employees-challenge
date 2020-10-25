import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';
import LoggedRoutes from './routes/LoggedRoutes';

function App() {
  return (
    <Router>
      <Navbar />
      <LoggedRoutes />
    </Router>
  );
}

export default App;
