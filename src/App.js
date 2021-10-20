import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import AuthProvider from './context/AuthProvider';
import AddToCart from './pages/AddToCart/AddToCart';
import AboutDetail from './pages/Home/AboutDetail/AboutDetail';
import ContactUs from './pages/Home/ContactUs/ContactUs';
import Doctors from './pages/Home/Doctors/Doctors';
// import AuthProvider from './context/AuthProvider';
import Home from './pages/Home/Home/Home';
import ServiceDetail from './pages/Home/ServiceDetail/ServiceDetail';
import Login from './pages/Login/Login/Login';
import NotFound from './pages/Login/NotFound/NotFound';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
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

            <Route path="/home">
              <Home></Home>
            </Route>


            <Route path="/login">
              <Login></Login>
            </Route>


            <PrivateRoute path="/servicedetail/:serviceId">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <PrivateRoute path="/aboutdetail">
              <AboutDetail></AboutDetail>
            </PrivateRoute>

            <PrivateRoute path="/addtocart">
              <AddToCart></AddToCart>
            </PrivateRoute>

            <PrivateRoute path="/contact">
              <ContactUs></ContactUs>
            </PrivateRoute>

            <Route path="/doctors">
              <Doctors></Doctors>
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
