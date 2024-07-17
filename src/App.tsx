import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' Component={Home} />
        </Route>
        <Route path='/login' Component={Auth} />
      </Routes>
    </Router>
  );
}

export default App;
