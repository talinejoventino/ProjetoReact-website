import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from '../Pages/Home'
import Series from '../Pages/Series'
import Profile from '../Pages/Profile'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>                
                <Route path="/series" component={Series}/>
                <Route path='/profile' component={Profile}/>    
            </Switch>   
        </BrowserRouter>
    )
}

export default Routes;