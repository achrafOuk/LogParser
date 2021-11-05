import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import error404 from './404page/404page';
import './App.css';
import Home from './Home/Home';
import Login from './Login/login';
function App() {
  return (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component = {Home} />
        <Route exact path="/login" component = {Login} />
        <Route path="*" component = {error404} />
      </Switch>
    </Router>
  </div>
  );
}
export default App;
