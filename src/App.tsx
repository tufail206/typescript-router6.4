import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import AboutPage from './pages/About'
// import Layout from './pages/Layout.tsx'
import { ProductPage } from './pages/products'
import { Loader as ProductLoader } from './loaders/Products'
import  {Loader as SinlgeProdut}  from './loaders/Singleproduct.tsx'
import DetialsPage from './pages/single-product'
import Sidebar from './layout/sidebar/Sidebar.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Sidebar />,
    children: [
      {
        path: 'products',
        index:true,
        element: <ProductPage/>,
        loader: ProductLoader,
        errorElement: <p>Error loading products</p>,
    

      },
      {
        path: 'product/:id',
        index: true,
        element: <DetialsPage />,
        loader: SinlgeProdut,
        errorElement: <p>Error loading products</p>,


      },
      {
        path: 'about',
        element: <AboutPage/>,
      },
    ],
  },

])
function App() {
 
  return (
    <>
     <RouterProvider router={router}/>   
    </>
  )
}

export default App
