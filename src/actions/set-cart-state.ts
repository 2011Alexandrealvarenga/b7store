import { setServerCart } from "libs/server-cookies";

export const setCartState = async (cart: CartItem[]) => {
  await setServerCart(cart);
}