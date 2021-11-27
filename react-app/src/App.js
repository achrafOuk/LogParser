import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import error404 from './404page/404page';
import './App.css';
import Home from './Home/Home';
import Login from './Login/login';
import { LogParser } from './LogParser/LogParser';
import { Register } from './Register/register';
import AuthRouter from './Components/shared/AuthRouter';
import PublicRouter from './Components/shared/PublicRouter';
// <Route exact path="/home" component = {LogParser} />
function App() {
  return (
  <div className="App">
    <Router>
      <Switch>
        <PublicRouter exact path='/' component = {Home} />
        <AuthRouter exact path='/home' component = {LogParser} />
        <PublicRouter exact path='/login' component = {Login} />
        <PublicRouter exact path='/register' component = {Register} />
        <Route path="*" component = {error404} />
      </Switch>
    </Router>
  </div>
  );
}
export default App;
