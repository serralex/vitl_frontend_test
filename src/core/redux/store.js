import { configureStore } from '@reduxjs/toolkit'
import { basketReducer } from '../../features/basket/slices'
import { productsReducer } from '../../features/products/slices'

export default configureStore({
  reducer: {
    basket: basketReducer,
    products: productsReducer
  },
})
