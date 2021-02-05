import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import Index from './screens/Admin/index'
import Index from './screens/index'
import Signin from './screens/Signin'
import Signup from './screens/Signup'

// import '../node_modules/font-awesome/css/font-awesome.min.css'; 


export default function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Switch>
                    <Route exact path='/' component={Index} />
                    <Route path='/signin' component={Signin} />
                    <Route path='/signup' component={Signup} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
