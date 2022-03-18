import { REQUEST, SUCCESS, FAILURE, LOAD_CART, ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART } from '../types';


const INITIAL_STATE = {
    items: {},
    entities: {},
    loading: false,
}

const cartReducer = function (state = INITIAL_STATE, action) {
    const { type, id, count, data, error } = action;

    switch (type) {
        case LOAD_CART + REQUEST:
          return {
            ...state,
            loading: true,
            error: null
          };
      case LOAD_CART + SUCCESS:
          return {
            ...state,
            entities: data,
            loading: false,
          };
      case LOAD_CART + FAILURE:
          return {
            ...state,
            loading: false,
            error: error
          };
      case ADD_ITEM_TO_CART:
          return {
              ...state,
              items: {...state.items, [id]: count},
          };
      case REMOVE_ITEM_FROM_CART:
          const items = {...state.items};
          delete items[id];
          return {
              ...state,
              items: items,
          };
      default:
          return state;
    }
};

export default cartReducer;