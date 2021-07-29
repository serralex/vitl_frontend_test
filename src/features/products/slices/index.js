import { createSlice } from '@reduxjs/toolkit'
import { requests } from '../../../core/api/requests'

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    list:[],
    config: {}
  },
  reducers: {
    setProducts: (state, { payload }) => {
      state.list = payload
    },
    setConfig: (state, { payload }) => {
      state.config = payload
    },
  },
})

export const productsReducer = productsSlice.reducer

export const { setProducts, setConfig } = productsSlice.actions

export const getProducts = () => (dispatch) => {
  const { getProductsList } = requests
  getProductsList
    .then(({data})=>{
      const {config, products} = data
      
      dispatch(setProducts(products))
      dispatch(setConfig(config))
    })
    .catch(({ response }) => {
      console.error(response)
    })
}
