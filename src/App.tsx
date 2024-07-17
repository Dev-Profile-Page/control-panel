import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth';
import Home from './pages/Home';
import PrivateRoute from './components/PrivateRoute';
import Page404 from './pages/Page404';


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' Component={Home} />
        </Route>
        <Route path='/login' Component={Auth} />
        <Route path='*' Component={Page404}/>
      </Routes>
    </Router>
  );
}

export default App;
