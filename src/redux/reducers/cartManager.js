const initialState = {
  cartCount: 0,
  cartProducts: [],
};

export default function cartManager(state = initialState, action) {
  switch (action.type) {
    case "cart/add_product":
      return {
        ...state,
        cartCount: state.cartCount + action.payload.quantity,
        cartProducts: [...state.cartProducts, action.payload],
      };

    case "cart/remove_product":
      return {
        ...state,
        cartCount: state.cartCount - action.payload.quantity,
        cartProducts: removeProduct(state, action.payload.id),
      };

    default:
      return state;
  }
}

const removeProduct = (state, productId) => {
  return state.cartProducts.filter((product) => product.id !== productId)
};
