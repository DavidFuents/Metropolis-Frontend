export const addToCart = (formData) => {
  return { type: "cart/add_product", payload: formData };
};

export const removeFromCart = (formData) => {
  return { type: "cart/remove_product", payload: formData };
};
