import { ApiProvider } from "./core/api/conexts"
import { ReduxProvider } from "./core/redux"
import AppRouter from "./core/router"

import Modal from './ui/Modal'
import BasketList from './features/basket/components/BasketList'

import './resources/styles/global.css'

const App = () => {
  return (
    <ReduxProvider>
        <ApiProvider>
          <Modal content= {<BasketList/>}/>
          <AppRouter/>
        </ApiProvider>
    </ReduxProvider>
  ) 
}

export default App
