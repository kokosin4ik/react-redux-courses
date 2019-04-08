import React from 'react';
import './app.css';
import {Route, Switch} from 'react-router-dom';
import {HomePage, CardPage} from '../pages';
import ShopHeader from  '../shop-header';

const App = () => {
  return (
    <main role='main' className='container'>
      <ShopHeader numItems={5} total={100}/>
      <Switch>
        <Route
          path='/'
          component={HomePage}
          exact/>
        <Route
          path='/cart'
          component={CardPage}
          exact/>
      </Switch>
    </main>
  )
};

export default App;