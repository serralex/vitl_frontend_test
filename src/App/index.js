import { ReduxProvider } from "../core/redux"
import AppRouter from "../core/router"

export const App = () => {
  return (
    <ReduxProvider>
        <AppRouter/>
    </ReduxProvider>
  ) 
}
