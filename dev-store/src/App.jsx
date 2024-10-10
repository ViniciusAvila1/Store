import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {ListProducts} from './pages/listProducts'
import { ProductsID } from './pages/productsID'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<ListProducts />} />
          <Route path='/productsID/:id' element={<ProductsID />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
