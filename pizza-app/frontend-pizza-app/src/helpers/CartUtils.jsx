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

export const addToCart = (event, product, cart, setCart, setIsAdding) => {
  event.preventDefault();
  let _cart = { ...cart };

  if (!_cart.items) {
    _cart.items = {};
  }

  if (_cart.items[product.$_id]) {
    _cart.items[product.$_id] += 1;
  } else {
    _cart.items[product.$_id] = 1;
  }

  if (!_cart.totalItems) {
    _cart.totalItems = 0;
  }

  _cart.totalItems += 1;

  setCart(_cart);

  setIsAdding(true);

  setTimeout(() => {
    setIsAdding(false);
  }, 1000);
};
