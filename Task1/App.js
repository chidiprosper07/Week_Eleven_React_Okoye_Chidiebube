// App.js
import { BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <div>
        
          <Route exact path="/" component={HomeComponent} />
          <Route path="/about" component={AboutComponent} />
        
      </div>
    </Routes>
  );
}