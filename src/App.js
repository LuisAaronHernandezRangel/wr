
import { Form } from './components/Form';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css'
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="container white">
      <Router>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/Dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
