import './App.css';
import AppHeading from './shared/AppHeading';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Dashboard from './pages/admin/Dashboard';
import Logout from './pages/login/Logout';
import ProfileManager from './pages/profile/ProfileManager';
import ProfileChangePass from './pages/profile/ProfileChangePass';
import useToken from './shared/useToken';
import FlightLogList from './pages/flight_log/FlightLogList';
import FlightLogDetail from './pages/flight_log/FlightLogDetail';
import "react-datetime/css/react-datetime.css";
import FlightLogForm from './pages/flight_log/FlightLogForm';

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
          <Route path="/profile/changePassword">
            <ProfileChangePass token={token} />
          </Route>
          <Route path="/profile">
            <ProfileManager token={token} />
          </Route>
          <Route path="/flightlog/new">
            <FlightLogForm token={token} />
          </Route>
          <Route path="/flightlog/:id">
            <FlightLogDetail token={token} {...props} />
          </Route>
          <Route path="/flightlogs">
            <FlightLogList token={token} />
          </Route>
          <Route path="/logout">
            <Logout visible={true} />
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
