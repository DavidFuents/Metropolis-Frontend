export const addToCart = (formData) => {
  return (dispatch) => {
    dispatch({ type: "cart/add_product", payload: formData });
  };
};

export const removeFromCart = (formData) => {
  return (dispatch) => {
    dispatch({ type: "cart/remove_product", payload: formData });
  };
};
