import {
  CLEARCART,
  DECREASE,
  GETTOTAL,
  INCREASE,
  REMOVE,
  TOGGLEAMOUNT,
} from "./action";
import cartItems from "./cart-items";

const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

function reducer(state = initialStore, action) {
  // console.log({ ...state });
  if (action.type === CLEARCART) {
    return { ...state, cart: [] };
  }
  if (action.type === DECREASE) {
    let tempCart = state.cart.map((cartItems) => {
      if (cartItems.id === action.payload.id) {
        cartItems = { ...cartItems, amount: cartItems.amount - 1 };
      }
      return cartItems;
    });

    return { ...state, cart: tempCart };
  }

  if (action.type === INCREASE) {
    let tempCart = state.cart.map((cartItems) => {
      if (cartItems.id === action.payload.id) {
        cartItems = { ...cartItems, amount: cartItems.amount + 1 };
      }
      return cartItems;
    });
    // state.count = state.count - 1;
    return { ...state, cart: tempCart };
    // state.count = state.count - 1;
    // return { ...state, cart: state.cart + 1 };
  }

  if (action.type === REMOVE) {
    return {
      ...state,
      cart: state.cart.filter(
        (cartItems) => cartItems.id !== action.payload.id
      ),
    };
  }

  if (action.type === GETTOTAL) {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItems) => {
        const { price, amount } = cartItems;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  }
  if (action.type === TOGGLEAMOUNT) {
    return {
      ...state,
      cart: state.cart.map((cartItems) => {
        if (cartItems.id === action.payload.id) {
          if (action.payload.toggle === "increase") {
            return (cartItems = { ...cartItems, amount: cartItems.amount + 1 });
          }
          if (action.payload.toggle === "decrease") {
            return (cartItems = { ...cartItems, amount: cartItems.amount - 1 });
          }
        }
        return cartItems;
      }),
    };
  }

  return state;
}

export default reducer;
