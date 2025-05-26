export const getCart = () => {
  return new Promise((resolve, reject) => {
    try {
      const cart = window.localStorage.getItem("cart");
      if (cart) resolve(cart);
      else reject("No cart data found!");
    } catch (error) {
      reject(error);
    }
  });
};

export const storeCart = (cart) => {
  window.localStorage.setItem("cart", JSON.stringify(cart));
};
