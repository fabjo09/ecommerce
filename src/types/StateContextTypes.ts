import {CartItem} from "./ProductType"

export interface StateContextTypes {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  totalPrice: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  totalQuantity: number;
  setTotalQuantity: React.Dispatch<React.SetStateAction<number>>;
  qty: number;
  setQty: React.Dispatch<React.SetStateAction<number>>;
  increaseQty: () => void;
  decreaseQty: () => void;
}
