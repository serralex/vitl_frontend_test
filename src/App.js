import { ApiProvider } from "./core/api/conexts"
import { ReduxProvider } from "./core/redux"
import AppRouter from "./core/router"

import CustomDialog from "./ui/Dialog"
import OffCanvas from "./ui/OffCanvas"
import BasketList from './features/basket/components/BasketList'

import './resources/styles/global.css'

const App = () => {
  return (
    <ReduxProvider>
        <ApiProvider>
          <CustomDialog/>
          <OffCanvas content= {<BasketList/>}/>
          <AppRouter/>
        </ApiProvider>
    </ReduxProvider>
  ) 
}

export default App
