import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Products from './Pages/Products'
import Categories from './Pages/Categories'
import Basket from './Pages/Basket'
import Productpage from './Pages/productpage'


function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/products/" element={<Products/>}/>
          <Route path="/categories/" element={<Categories/>}/>
          <Route path="/basket/" element={<Basket/>}/>


        </Routes>
      
      </main>
    </>
  )
}

export default App
