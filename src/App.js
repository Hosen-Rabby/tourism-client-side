import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Header from './pages/Header';
import BookingItem from './pages/BookingItem';
import AuthProvider from './context/AuthProvider';
import Booking from './pages/Booking';
import PrivateRoute from './pages/PrivateRoute';
import Shipping from './pages/Shipping';
import Footer from './pages/Footer';
import MyBooking from './pages/MyBooking';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            {/* <Route path='/mybooking'>
              <MyBooking></MyBooking>
            </Route> */}
            <PrivateRoute path='/booking'>
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute path='/bookingitem/:id'>
              <BookingItem></BookingItem>
            </PrivateRoute>
            <PrivateRoute path='/shipping/:id'>
              <Shipping></Shipping>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
