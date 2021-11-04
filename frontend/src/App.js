import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import './index.css';
import Error404 from './pages/404/404';
import Index from './pages/landingpag';
import Login from './pages/login/login';
import Register from './pages/register/register';
import FileUpload from './pages/fileUpload/fileUpload';
import AuthController1 from './controllers/AuthController';
function App() {
  let auth = new AuthController1();
  return (
        <Router>
          <Switch>
            <Route exact path='/' >
              <Index token={()=>auth.getToken()} ></Index>
            </Route>
            <Route exact path='/file' >
              <FileUpload token={()=>auth.getToken()} ></FileUpload>
            </Route>
            <Route exact path='/register'>
              <Register token={()=>auth.getToken()} ></Register>
            </Route>
            <Route exact path='/login'>
              <Login token={()=>auth.getToken()} setToken={ (j,t) => auth.setToken(j,t)}/>
              </Route>
            <Route path='*' component={Error404} ></Route>
          </Switch>
        </Router>
        );
}
export default App;
