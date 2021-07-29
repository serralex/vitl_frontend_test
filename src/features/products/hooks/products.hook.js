import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getProducts } from '../slices'

export const useProducts = () => {
  const dispatch = useDispatch()
  const {list, config} = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  return {list, config}
}
