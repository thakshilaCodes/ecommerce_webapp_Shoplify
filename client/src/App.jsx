
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthLogin from './pages/auth/login'
import AuthRegister from './pages/auth/register'
import AuthLayout from './components/auth/layout'
import AdminLayout from './components/admin-view/layout'
import AdminDashboard from './pages/admin-view/dashboard'
import AdminOrders from './pages/admin-view/orders'
import AdminProducts from './pages/admin-view/products'
import AdminFeatures from './pages/admin-view/features'
import ShoppingLayout from './components/shopping-view/layout'
import NotFound from './pages/not-found'
import ShoppingHome from './pages/shopping-view/home'
import ShoppingListing from './pages/shopping-view/listing'
import ShoppingAccount from './pages/shopping-view/account'
import ShoppingCheckout from './pages/shopping-view/checkout'


function App() {


  return (
    <div className='flex flex-col overflow-hidden bg-white'>


      <Routes>

        <Route path='/auth' element={<AuthLayout />}>
          <Route path='login' element={<AuthLogin />} />
          <Route path='register' element={<AuthRegister />} />
        </Route>

        <Route path='/admin' element={<AdminLayout />}>
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='orders' element={<AdminOrders />} />
          <Route path='products' element={<AdminProducts />} />
          <Route path='features' element={<AdminFeatures />} />

        </Route>

        <Route path='/shop' element={<ShoppingLayout />}>
          <Route path='home' element={<ShoppingHome />} />
          <Route path='listing' element={<ShoppingListing/>}/>
          <Route path='account' element={<ShoppingAccount/>}/>
          <Route path='checkout' element={<ShoppingCheckout/>}/>

        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>


    </div>

  )
}

export default App
