// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ParentComponent from './ParentComponent';
import ChildComponent from './ChildComponent';

const App = () => {
  return (
    <Routes>
        <Route exact path="/" component={ParentComponent} />
        <Route path="/parent" component={ParentComponent} />
        <Route path="/parent/child" component={ChildComponent} />
    </Routes>
  );
};

export default App;