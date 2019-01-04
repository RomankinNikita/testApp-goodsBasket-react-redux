import React from 'react';
import {Link} from 'react-router-dom';
import './goods-list-page.css';
import SearchPanel from '../search-panel/search-panel';
import GoodsList from '../goods-list/goods-list';

const GoodsListPage = () => {
  return (
    <div className="goods-list">
      <h3>Список товаров</h3>
      <SearchPanel/>
      <GoodsList/>
       <Link to="/basket" className="btn btn-info">Корзина</Link>
    </div>
  );
};

export default GoodsListPage;