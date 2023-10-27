// App.js
import React from 'react';
import {  Routes, Route, } from 'react-router-dom';
import NavigationMenu from './NavigationMenu'; 
import HomeComponent from './Home'; 
import AboutComponent from './About'; 

function App() {
  return (
    <Routes>
      <div>
    
        <NavigationMenu />

    
          <Route exact path="/" component={HomeComponent} />
          <Route path="/about" component={AboutComponent} />
      </div>
    </Routes>
  );
}

export default App;