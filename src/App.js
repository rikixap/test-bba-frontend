import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './page/Home';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'


library.add(faGhost, fas);

function App() {
  return (
    <div>
      <Router>
          <Route exact path="/" component={Home}/>
      </Router>
    </div>
  );
}

export default App;
