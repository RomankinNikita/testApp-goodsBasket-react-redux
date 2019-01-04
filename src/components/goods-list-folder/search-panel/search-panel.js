import React from 'react';
import './search-panel.css';
import {connect} from 'react-redux';
import {searchItems} from '../../redux/actions';

const SearchPanel = ({term, onSearchChange}) => {
  return (
    <input type="text"
           placeholder="Введите часть названия товара"
           className="form-control search-input"
           value={term}
           onChange={(e) => {
             const value = e.target.value;
             onSearchChange(value);
           }}/>
  );
};

const mapStateToProps = ({term}) => {
  return {
    term
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (value) => dispatch(searchItems(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);