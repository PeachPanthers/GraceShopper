import axios from "axios";
const TOKEN = "token";
import history from "../history";

// action types
export const ADD_TO_CART = "ADD_TO_CART";
export const GET_CART_ITEMS = "GET_CART_ITEMS";
const UPDATE_CART= 'UPDATE_CART';

// action creators
export const _addToCart = (cartItem) => {
  return {
    type: ADD_TO_CART,
    cartItem,
  };
};

export const _getCartItems = (cartItems) => {
  return {
    type: GET_CART_ITEMS,
    cartItems,
  };
};


// thunks
export const addToCart = (userObj) => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    const { data } = await axios.post(
      `/api/products/${userObj.productId}`,
      userObj,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return dispatch(_addToCart(data));
  }
};

export const getCartItems = (user) => {
  return async (dispatch) => {
    try {
      // console.log('This is the user in the cart redux', user);
      // const {id}= user
      const { data } = await axios.put("/api/cart", user);
      dispatch(_getCartItems(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...action.cartItem };
    case GET_CART_ITEMS:
      // cartItems.filter((cartItem)=>{

      // })
      return action.cartItems;
    default:
      return state;
  }
}

