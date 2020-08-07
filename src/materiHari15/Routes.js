import React from "react";
import {Switch, Route, Link} from 'react-router-dom';

import HargaBuah from '../tugas11/HargaBuah'
import CountDown from '../tugas12/CountDown'

const Routes = () => {

  return (
      <>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/countdown'>Countdown</Link>
                </li>
            </ul>
        </nav>
      
      
      <Switch>
          <Route path='/countdown'>
              <CountDown countStart={100}/>
          </Route>
          <Route path='/'>
              <HargaBuah/>
          </Route>
          
      </Switch>   

      </>
  );
};

export default Routes;