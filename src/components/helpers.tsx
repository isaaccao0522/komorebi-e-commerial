export const getCartTotal = ( cart: ICartItem[]) => {
  return cart.reduce ( ( amount, item) => amount + item.price * item.quantity, 0)
};