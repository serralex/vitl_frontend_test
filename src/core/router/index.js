import { Route, Switch, HashRouter, Redirect} from 'react-router-dom'
import StorePage from '../../pages/store'

const AppRouter = () => {
    return(
        <HashRouter>
            <Switch>
                <Route path="/store" component={StorePage} />
                <Redirect to="/store" />
            </Switch>
        </HashRouter>
    )
}

export default AppRouter