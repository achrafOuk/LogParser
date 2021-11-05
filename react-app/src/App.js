import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import error404 from './404page/404page';
import './App.css';
import Home from './Home/Home';
import Login from './Login/login';
import { Register } from './Register/register';
function App() {
  return (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component = {Home} />
        <Route exact path="/login" component = {Login} />
        <Route exact path="/register" component = {Register} />
        <Route path="*" component = {error404} />
      </Switch>
    </Router>
  </div>
  );
}
export default App;
