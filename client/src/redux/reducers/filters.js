import {
    LOAD_PRODUCTS,
    SUCCESS,
    TOGGLE_PRODUCTS_IS_FILTERING,
    PRODUCTS_IS_FILTERING,
    PRODUCTS_IS_FILTERED,
    SETLECT_PRODUCTS_SORT_BY,
    SET_QUERY_STRING,
} from '../types';


const INITIAL_STATE = {
    filters: {},
    isFiltering: {},
    products: [],
    sortBy: { value: 'rating', label: 'Сначала популярные' },
    queryString: null,
}

const filtersReducer = function (state = INITIAL_STATE, action) {
  const { type, data, url, sortBy, queryString, status } = action;

  switch (type) {
    case LOAD_PRODUCTS + SUCCESS:
      return {
        ...state,
        filters: {...state.filters, [url]:data.filters},
      };
    case TOGGLE_PRODUCTS_IS_FILTERING:
      return {
          ...state,
          isFiltering: {...state.isFiltering, [url]: status},
      };
    case PRODUCTS_IS_FILTERING:
      return {
          ...state,
          isFiltering: {...state.isFiltering, [url]: true},
      };
    case PRODUCTS_IS_FILTERED:
        return {
            ...state,
            isFiltering: {...state.isFiltering, [url]: false},
            products: {...state.products, [url]: data}
        };
    case SETLECT_PRODUCTS_SORT_BY:
        return {
            ...state,
            sortBy: sortBy,
        };
    case SET_QUERY_STRING:
        return {
            ...state,
            queryString: {...state.queryString, [url]: queryString},
        };
    default:
      return state;
  }
};

export default filtersReducer;