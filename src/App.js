import React, { Fragment } from 'react';
import './assets/styles/tailwind.css';
import './components/layout/Landing';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Fragment>
      <div className="h-screen max-w-full border-4">
        <Navbar/>
      </div>
    </Fragment>
  );
}

export default App;