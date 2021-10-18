import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import AuthProvider from './context/AuthProvider';
// import AuthProvider from './context/AuthProvider';
import Home from './pages/Home/Home/Home';
import ServiceDetail from './pages/Home/ServiceDetail/ServiceDetail';
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

      <AuthProvider>
        <Router>
          <NavigationBar></NavigationBar>
          <Switch>

            <Route exact path="/home">
              <Home></Home>
            </Route>


            <Route exact path="/login">
              <Login></Login>
            </Route>


            <Route path="/servicedetail/:serviceId">
              <ServiceDetail></ServiceDetail>
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
      </AuthProvider>

    </div>
  );
}

export default App;
