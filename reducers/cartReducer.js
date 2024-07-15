import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';

const initialState = {
  cartItems: [], // Array of objects representing cart items (id, name, price, quantity)
  totalRevenue: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          totalRevenue: state.totalRevenue + action.payload.price,
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        totalRevenue: state.totalRevenue + action.payload.price,
      };
    case REMOVE_FROM_CART:
      const itemToRemove = state.cartItems.find((item) => item.id === action.payload.id);
      if (itemToRemove) {
        const updatedCartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
        const updatedTotalRevenue = state.totalRevenue - itemToRemove.price * itemToRemove.quantity;
        return {
          ...state,
          cartItems: updatedCartItems,
          totalRevenue: updatedTotalRevenue > 0 ? updatedTotalRevenue : 0, // Ensure total doesn't go negative
        };
      }
      return state;
    default:
      return state;
  }
};

export default cartReducer;
