import HomePage from './pages/HomePage'
import Login from './pages/Login'
import ProductDetails from './pages/ProductDetails'
import Header from './pages/Header'
import Footer from './pages/Footer'
// import './App.css'
import {Route,Routes} from "react-router-dom"
import Electronics from './pages/Electronics'
function App() {
 




  return (
    <div className="app">
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/electronics" element={<Electronics />} />
    </Routes>
    <Footer />
  </div>
  );
}

export default App
