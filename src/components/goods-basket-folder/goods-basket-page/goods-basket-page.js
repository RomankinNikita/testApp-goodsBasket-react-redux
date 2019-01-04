import React from 'react';
import {Link} from 'react-router-dom';
import './goods-basket-page.css';
import GoodsBasket from '../goods-basket/goods-basket';
import {connect} from 'react-redux';
import {clearBasket} from '../../redux/actions';

const GoodsBasketPage = ({goods, onClearBasket}) => {
  const isNotEmpty = goods.filter((it) => it.amount > 0).length;
  const basketContent = (
    <React.Fragment>
      <h3>Корзина</h3>
      <GoodsBasket/>
    </React.Fragment>
  );
  const emptyAlert = <span className="empty-basket">Корзина пуста!</span>;
  const content = isNotEmpty ? basketContent : emptyAlert;

  return (
    <div className="goods-basket">
      {content}
      <div className="d-flex justify-content-between">
        <Link to="/list" className="btn btn-info">Перейти в список товаров</Link>
        <button className="btn btn-danger" onClick={onClearBasket}>Очистить корзину</button>
      </div>
    </div>
  );
};

const mapStateToProps = ({goods}) => {
  return {
    goods
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClearBasket: () => dispatch(clearBasket())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoodsBasketPage);