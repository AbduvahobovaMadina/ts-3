import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Layout from './layout/Layout'
import SingleProduct from './components/single-product/single-product'

function App() {
 

  return (
    <>
      <h2>React typscript</h2>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={ <Home/>}/>
        <Route path="products/:id" element={<SingleProduct />} />
        </Route>

      </Routes>
     
    </>    
  )
}

export default App
