import { createSlice } from '@reduxjs/toolkit'

const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    items:[]
  },
  reducers: {
    addItemToBasket: (state, { payload }) => {
      state.items = [...state.items, payload]
    },
    deleteBasketItem: (state, { payload }) => {
      state.items = payload
    },
  },
})

export const basketReducer = basketSlice.reducer

export const { addItemToBasket, deleteBasketItem } = basketSlice.actions
