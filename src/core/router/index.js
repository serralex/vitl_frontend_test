import { Route, Switch, HashRouter, Redirect} from 'react-router-dom'
import StorePage from '../../pages/store'
import Header from '../../ui/layout/Header'

const AppRouter = () => {
    return(
        <HashRouter>
            <Header/>
                <Switch>
                    <Route path="/store" component={StorePage} />
                    <Redirect to="/store" />
                </Switch>
        </HashRouter>
    )
}

export default AppRouter