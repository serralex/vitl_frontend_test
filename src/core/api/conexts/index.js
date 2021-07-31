import { createContext, useContext } from 'react'
import { requests } from '../requests'

const ApiContext = createContext({})

const ApiProvider = ({ children }) => {
  return <ApiContext.Provider value={requests}>{children}</ApiContext.Provider>
}

const useApiContext = () => useContext(ApiContext)

export { ApiProvider, useApiContext }
