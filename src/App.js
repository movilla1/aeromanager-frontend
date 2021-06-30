import './App.css';
import AppHeading from './shared/AppHeading';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Dashboard from './pages/admin/Dashboard';
import useToken from './shared/useToken';

function App(props) {
  const { token, setToken } = useToken();

  return (
    <Container className="p-3">
      <Router>
        <AppHeading token={token} />
        <Switch>
          <Route path="/login">
            <Login setToken={setToken} />
          </Route>
          <Route path="/">
            <Dashboard title="Dashboard" {...props} />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
