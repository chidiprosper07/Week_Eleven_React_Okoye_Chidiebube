 App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import withAuth from './withAuth'; // Import the HOC
import Login from './Login'; // Your login page component
import ProtectedComponent from './ProtectedComponent'; // Your protected component

const App = () => {
  return (
    <Routes>
        <Route path="/login" component={Login} />
        <Route path="/protected" component={withAuth(ProtectedComponent)} />
    </Routes>
  );
};

export default App;