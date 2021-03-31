import logo from './logo.svg';
import './App.css';
import { Route,Link, Switch } from 'react-router-dom';
import TogglePassword from './Components/TogglePassword';

function App() {
  return (
    <div className="container">
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/toggle_password">Toggle Password</Link>
        </li>
      </ol>
      <div className="container"> 
      <Switch>
        <Route path="/toggle_password" component={TogglePassword} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
