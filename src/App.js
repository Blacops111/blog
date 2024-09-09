import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Create from './Component/Create';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
   <Router>
     <div className="App">
     <Navbar/>
     <div className="Day">
      <Switch>
        <Route exact path = "/">
         <Home />
        </Route>
        <Route path = "/Create">
        <Create/>
        </Route>
      </Switch>
     </div>
     </div>
   </Router>
  );
}

export default App;