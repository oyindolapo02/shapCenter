import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Product from './Pages/product/Product';
import Products from './Pages/products/Products';
import Alldata from './Pages/Alldata/Alldata';
import Cart from './Pages/CartF/Cart';
import Notexisitingpage from './Pages/NonExistingpages F/Notexisitingpage';


// const Layout = ()=> {
//   return (
//     <div className='border border-blue-500'>
//       <Navbar/>
//       <Outlet/>
//       <Footer/>
//     </div>
//   )
// }

// const routers = createBrowserRouter([
//   {
//     path: '/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'/',
//         element:<Home/>
//       },
//       {
//         path:'/products/:id',
//         element:<Products/>
//       },
//       {
//         path:'/product/:id',
//         element:<Product/>
//       }
//     ]
//   },
  
// ])


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='products/:id' element={<Products/>}/>
          <Route path='/alldata' element={<Alldata/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='*' element={<Notexisitingpage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
