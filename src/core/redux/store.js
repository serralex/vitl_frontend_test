import { configureStore } from '@reduxjs/toolkit'
import { basketReducer } from '../../features/basket/slices'
import { globalReducer } from '../../features/global/slices'
import { productsReducer } from '../../features/products/slices'

export default configureStore({
  reducer: {
    global: globalReducer,
    basket: basketReducer,
    products: productsReducer
  },
})
