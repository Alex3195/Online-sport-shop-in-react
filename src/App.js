import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './layouts/MyNavbar/MyNavbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import Men from './components/Men/Men';
function App() {
  return (
    <div className="card">
      <Router>
        <MyNavbar />
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/men" exact component={Men} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
