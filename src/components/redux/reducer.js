const initialState =  {
  goods: [
    { id: 'i1', name: 'Клюшка', price: 890, amount: 0 },
    { id: 'i2', name: 'Коньки', price: 20, amount: 0 },
    { id: 'i3', name: 'Шайба', price: 428, amount: 0 },
    { id: 'i4', name: 'Шлем', price: 45, amount: 0 },
  ],
  term: ''
};

const changeItemAmount = (id, goods, isAdd = true, isClear = false) => {
  const index = goods.findIndex((item) => item.id === id);
  const targetItem = goods[index];
  let amount = isAdd ? targetItem.amount + 1 : targetItem.amount - 1;
  amount = isClear ? 0 : amount;
  const changedItem = { ...targetItem, amount };
  return [
    ...goods.slice(0, index),
    changedItem,
    ...goods.slice(index + 1)
  ];
};

const addOneItem = (id, state) => {
  const {goods} = state;
  const newGoods = changeItemAmount(id, goods);
  return {...state, goods: newGoods};
};

const deleteOneItem = (id, state) => {
  const {goods} = state;
  const newGoods = changeItemAmount(id, goods, false);
  return {...state, goods: newGoods};
};

const deleteAllItems = (id, state) => {
  const {goods} = state;
  const newGoods = changeItemAmount(id, goods, true, true);
  return {...state, goods: newGoods};
};

const clearBasket = (state) => {
  const {goods} = state;
  const goodsCopy = [...goods];
  for (const item of goodsCopy) {
    item.amount = 0;
  }

  return {...state, goods: goodsCopy};
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ONE_ITEM':
      return addOneItem(action.id, state);
    
    case 'DELETE_ONE_ITEM':
      return deleteOneItem(action.id, state);

    case 'DELETE_ALL_ITEMS':
      return deleteAllItems(action.id, state);

    case 'CLEAR_BASKET':
      return clearBasket(state);  

    case 'SEARCH_ON_NAME':
      return {...state, term: action.value};  

    default:
      return state;  
  }
};

export default reducer;