import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import Index from './screens/Admin/index'
import Index from './screens/index'
import Signin from './screens/Signin'
import Signup from './screens/Signup'
import AdminIndex from './screens/Admin/index'
import AdminProductsScreen from './screens/Admin/AdminProducts'
import GetProducts from './screens/Admin/Products'
import AddProduct from './screens/Admin/addProduct'
// import UpdateProduct from './screens/Admin/updateProduct'
// import DeleteProduct from './screens/Admin/deleteProducts'

// import '../node_modules/font-awesome/css/font-awesome.min.css'; 


export default function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Switch>
                    <Route exact path='/' component={Index} />
                    <Route path='/signin' component={Signin} />
                    <Route path='/signup' component={Signup} />
                    <Route exact path="/admin" component={AdminIndex} />
                    <Route exact path="/admin/products" component={AdminProductsScreen}/>
                    <Route path="/admin/products/show" component={GetProducts}/>
                    <Route path="/admin/products/add" component={AddProduct}/>
                    {/* <Route path="/admin/products/update" component={UpdateProduct}/>
                    <Route path="/admin/products/delete" component={DeleteProduct}/> */}

                </Switch>
            </div>
        </BrowserRouter>
    )
}
