const initialState = {
  cartCount: 0,
  cartProducts: [],
};

export default function cartManager(state = initialState, action) {
  switch (action.type) {
    case "cart/add_product":
      const product = {
        ...action.payload.product,
        sizeSelected: action.payload.sizeSelected,
        quantity: action.payload.quantity,
      };

      return {
        ...state,
        cartCount: state.cartCount + action.payload.quantity,
        cartProducts: [...state.cartProducts, product],
      };

    case "cart/remove_product":
      console.log(action.payload)
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
