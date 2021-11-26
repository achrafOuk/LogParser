import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import error404 from './404page/404page';
import './App.css';
import Home from './Home/Home';
import Login from './Login/login';
import { LogParser } from './LogParser/LogParser';
import { Register } from './Register/register';
import { Redirect } from 'react-router'
import AuthRouter from './Components/shared/AuthRouter';
import PublicRouter from './Components/shared/PublicRouter';
// <Route exact path="/home" component = {LogParser} />
function App() {
  return (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component = {Home} />

        <AuthRouter path='/home'  >
              <LogParser/>
        </AuthRouter>

        <PublicRouter path='/login'  >
              <Login/>
        </PublicRouter>

        <Route exact path="/register" component = {Register} />
        <Route path="*" component = {error404} />
      </Switch>
    </Router>
  </div>
  );
}
export default App;
