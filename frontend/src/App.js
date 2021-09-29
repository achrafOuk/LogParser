import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import './index.css';
import Error404 from './pages/404/404';
import Index from './pages/landingpag';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Navbar from './components/navbar/navbar';
import FileUpload from './pages/fileUpload/fileUpload';
import AuthController from './controllers/AuthController';
function App() {
  let auth = new AuthController();
  return (
        <Router>
          <Navbar token={auth.getToken}/>
          <Switch>
            <Route exact path='/' component={Index}></Route>
            <Route exact path='/file'component={FileUpload}></Route>
            <Route exact path='/register'component={Register}></Route>
            <Route exact path='/login'>
              <Login setToken={ (j,t) => auth.setToken(j,t)}/>
              </Route>
            <Route path='*' component={Error404} ></Route>
          </Switch>
        </Router>
        );
}
export default App;
