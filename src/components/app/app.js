import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './app.css';
import GoodsListPage from '../goods-list-folder/goods-list-page/goods-list-page';
import GoodsBasketPage from '../goods-basket-folder/goods-basket-page/goods-basket-page';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Route path="/"
               exact
               render={
                 () => <Redirect to="/list"/>
               }/>
        <Route path="/list"
               component={GoodsListPage}
        />
        <Route path="/basket"
                component={GoodsBasketPage}/>
      </React.Fragment>
    </Router>
  )
};

export default App;