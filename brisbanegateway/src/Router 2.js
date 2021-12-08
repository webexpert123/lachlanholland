import React, { useState } from 'react';

import Home from './pages/Home';
import HolidayCabins from './pages/HolidayCabins';
import Caravans from './pages/Caravans';
import Facilities from './pages/Facilities';
import Longterm from './pages/Longterm';
import About from './pages/About';
import Contact from './pages/Contact';
import Groups from './pages/Groups';
import Offers from './pages/Offers';




const Routing = () => {
    return (
      <Router>
        <Switch>
          <Route exact path='/'><Home/></Route>
          <Route path='/holidaycabins'><HolidayCabins/></Route>
          <Route path='/caravans'><Caravans/></Route>
          <Route path='/facilities'><Facilities/></Route>
          <Route path='/long-term'><Longterm/></Route>
          <Route path='/groups'><Groups/></Route>
          <Route path='/about'><About/></Route>
          <Route path='/contact'><Contact/></Route>
          <Route path='/offers'><Offers/></Route>
        </Switch>
      </Router> 
    )
}