import { Tproduct } from '@/utils/data'
import { CART_ADD_ITEM } from '@/utils/variables'
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from 'react'

export interface TCart {
  cart: { cartItems: any[] }
}

interface TStoreContextValue {
  cart: TCart
  addToCart: (item: any) => void
  removeItemFromCart: (item: any) => void
  clearCart: () => void
  setItemCountAndTotalPrice: (id: number, count: number) => void
}

const initialValue: TCart = { cart: { cartItems: [] } }

const StoreContext = createContext<any>(initialValue)

export const useStoreContext = () => useContext(StoreContext)

function reducer(state: any, action: any) {
  switch (action.type) {
    case CART_ADD_ITEM:
      const newItem = action.payload
      const foundItem = state.cart.cartItems.find(
        (item: Tproduct) => item.slug === newItem.slug
      )
      const cartItems = foundItem
        ? state.cart.cartItems.map((item: Tproduct) =>
            item.name === foundItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem]
      return { ...state, cart: { ...state.cart, cartItems } }
    default:
      return state
  }
}

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialValue)

  return (
    <StoreContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
