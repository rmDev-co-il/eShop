import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login"
import Home from './pages/home/Home'

function AdminRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route exact path="/" element={<Home />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/user/:userId" element={<User />} />
                <Route path="/newUser" element={<NewUser />} />
                <Route path="/products" element={<ProductList />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/newproduct" element={<NewProduct />} />
            </Routes>
        </Router >
    )
}


function NotAdminRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}
export { NotAdminRoutes, AdminRoutes }

/// 

    // < Router >
    // <Routes>
    //     <Route path="/login" element={<Login />} />
    //     <Route exact path="/" element={admin ? <Home /> : <Navigate to="/login" />} />
    //     <Route path="/users" element={admin ? <UserList /> : <Navigate to="/login" />} />
    //     <Route path="/user/:userId" element={admin ? <User /> : <Navigate to="/login" />} />
    //     <Route path="/newUser" element={admin ? <NewUser /> : <Navigate to="/login" />} />
    //     <Route path="/products" element={admin ? <ProductList /> : <Navigate to="/login" />} />
    //     <Route path="/product/:productId" element={admin ? <Product /> : <Navigate to="/login" />} />
    //     <Route path="/newproduct" element={admin ? <NewProduct /> : <Navigate to="/login" />} />
    // </Routes>
    //     </Router >