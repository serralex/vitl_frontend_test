import { createSlice } from '@reduxjs/toolkit'
import { requests } from '../../../core/api/requests'

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    loading: true,
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
    setLoading: (state, { payload }) => {
      state.loading = payload
    },
  },
})

export const productsReducer = productsSlice.reducer

export const { setProducts, setConfig, setLoading } = productsSlice.actions

export const getProducts = () => (dispatch) => {
  const { getProductsList } = requests  
  dispatch(setLoading(true))
  
  getProductsList
    .then(({data})=>{
      const {config, products} = data
      
      dispatch(setLoading(false))
      dispatch(setProducts(products))
      dispatch(setConfig(config))
    })
    .catch(({ response }) => {
      console.error(response)
    })
}
