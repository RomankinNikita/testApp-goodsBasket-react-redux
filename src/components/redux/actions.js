export const addOneItem = (id) => ({type: 'ADD_ONE_ITEM', id});
export const deleteOneItem = (id) => ({type: 'DELETE_ONE_ITEM', id});
export const deleteAllItems = (id) => ({type: 'DELETE_ALL_ITEMS', id});
export const clearBasket = () => ({type: 'CLEAR_BASKET'});
export const searchItems = (value) => ({type: 'SEARCH_ON_NAME', value})