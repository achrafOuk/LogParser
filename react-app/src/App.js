import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import error404 from './404page/404page';
import './App.css';
import Home from './Home/Home';
import Login from './Login/login';
import { LogParser } from './LogParser/LogParser';
import { Register } from './Register/register';
import AuthRouter from './Components/shared/AuthRouter';
import PublicRouter from './Components/shared/PublicRouter';
import { useHistory } from 'react-router-dom';
import { Logout } from './Logout/Logout';
import Footer from './footer/Footer';
function App() {
  const history = useHistory();
  return (
  <div className="App">
    <Router>
      <Switch>
        <PublicRouter exact path='/' component = {Home} />
        <AuthRouter exact path='/home' component = {LogParser} history={history}/>
        <AuthRouter exact path='/logout' component = {Logout} history={history}/>
        <PublicRouter history={history} exact path='/login' component = {Login} />
        <PublicRouter exact path='/register' component = {Register} />
        <Route path="*" component = {error404} />
      </Switch>
      <Footer></Footer>
    </Router>
  </div>
  );
}
export default App;
