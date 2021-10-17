import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
// import AuthProvider from './context/AuthProvider';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import NotFound from './pages/Login/NotFound/NotFound';
import Footer from './pages/Shared/Footer/Footer';
import NavigationBar from './pages/Shared/Navigation/NavigationBar';


// font-family: 'Merriweather Sans', sans-serif;

// font-family: 'Courgette', cursive;

// #333333

// #dedede


function App() {
  return (
    <div className="App">

      <Router>
        <NavigationBar></NavigationBar>
        <Switch>

          <Route exact path="/home">
            <Home></Home>
          </Route>


          <Route exact path="/login">
            <Login></Login>
          </Route>


          <Route exact path="/home">
            <Home></Home>
          </Route>


          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>


        </Switch>
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;
