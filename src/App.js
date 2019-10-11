import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import 'bootstrap/dist/css/bootstrap.css'


class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
              <Navbar/><br></br><br></br>
              <div className="jumbotron jumbotron-fluid mt-n5" style={{ backgroundImage: "url(./kashmir.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover",height:"600px"}}>
                    <p>
                        <p className="display-2 font-weight-bold" style={{ textAlign: "center" }}>SHEJAR</p>
                        <small id="extratext" class="form-text font-italic display-4" style={{ textAlign: "center" }}>Flavours of Kashmir.</small>
                    </p>
                </div>
                <div className="container">
                    <h2 className="display-5 font-weight-bold">About the food culture</h2>
                    <p className="font-weight-dark">We Delivery specially made kashmiri cuisine for you , right at your doorstep!
                        Get ready to taste the delicious <strong> lavaas(naan), Roganjosh</strong> , and take the sip of specially made <strong>Kehwa Tea (Mughal Tea)</strong>.
                        Order Online Today !
                    </p><br></br><br></br>
                    <h2 className="display-5 font-weight-bold" id="our">Our Picks for You</h2>
                    </div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
