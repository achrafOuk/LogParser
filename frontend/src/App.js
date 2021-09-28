import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import './index.css';
import Error404 from './pages/404/404';
import Index from './pages/landingpag';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Navbar from './components/navbar/navbar';
function App() {
  return (
        <Router>
          <Navbar />
          <div className="App">
            <header className="App-header">
          <Switch>
            <Route exact path='/' component={Index}></Route>
            <Route path='/register'component={Register}></Route>
            <Route path='/login'component={Login}></Route>
            <Route path='*' component={Error404} ></Route>
          </Switch>
          </header>
          </div>
        </Router>
        );
}
export default App;
