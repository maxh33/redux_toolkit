import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

interface CartState {
  items: Produto[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Produto>) {
      state.items.push(action.payload)
    },
    removeFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
