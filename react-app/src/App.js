import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="login" element={<Home/>} />
        <Route exact path="register" element={<Home/>} />
      </Routes>
    </Router>
</div>
  );
}
export default App;
