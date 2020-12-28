import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Home from '../pages/Home';
import Pokemon from '../pages/Pokemon';
import Employees from '../pages/Employees';

const LoggedRoutes = () => {
  return ( 
    <Switch>
      <Route path={['/home', '/']} exact component={Home}/>
      <Route path='/pokemons' exact component={Pokemon}/>
      <Route path='/employees' exact component={Employees}/>
    </Switch>
  );
}
 
export default LoggedRoutes;