import React, { useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Orders from './Orders';
import Payment from './Payment';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from  './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51HQ0M6K6gdfQMYcW9NKygz8HxOrc06zsARV9GgGjZmA3fRAJdCMFw4iGTjAtAUtYZq23kiLgis4B2t6gQ37CA3C400ZzegLEjE');

function App() {
  
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('The User is ', authUser);
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user:  authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []) 
  return (
    <Router>
        <div className="App">
        
          <Switch>
              <Route path="/orders">
                <Header />
                <Orders />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/checkout">
                <Header />
                <Checkout />
              </Route>
              <Route path="/payment">
                <Header />
                  <Elements stripe={promise}>
                      <Payment />
                  </Elements>
              </Route>
              <Route path="/">
                <Header />
                <Home />
              </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
