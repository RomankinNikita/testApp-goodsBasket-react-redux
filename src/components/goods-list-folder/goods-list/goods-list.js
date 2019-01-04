import React from 'react';
import './goods-list.css';
import {connect} from 'react-redux';
import {addOneItem} from '../../redux/actions';

const GoodsList = ({goods, term, onAddItem}) => {
  const search = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    
    return items.filter((item) => {
      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  const visibleItems = search(goods, term);

  const elements = visibleItems.map((item) => {
    const {id, name, price, amount} = item;

    return (
      <tr key={id}>
        <th scope="row">{name}</th>
        <td>{`$${price}`}</td>
        <td>{amount}</td>
        <td>
          <button className="btn btn-success btn-sm add-to-basket"
                  onClick={() => onAddItem(id)}>
            &#10010;
          </button>
        </td>
      </tr>
    );
  })

  return (
    <table className="table table-hover">

      <thead align="center" valign="center" className="thead-light">
         <tr>
           <th>Название</th>
          <th>Цена</th>
          <th>Количество</th>
          <th>Добавить в корзину</th>
        </tr>
       </thead>

       <tbody align="center" valign="center">
         {elements}
      </tbody>
      
    </table>
  );
};

const mapStateToProps = ({goods, term}) => {
  return {
    goods,
    term
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddItem: (id) => dispatch(addOneItem(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoodsList);