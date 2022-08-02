import './App.css'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RestaurantList from './pages/RestaurantList'
import RestaurantForm from './pages/RetaurantForm'
import ReviewDetails from './pages/ReviewDetails'
import RestaurantDetails from './pages/RestaurantDetails'
import ReviewForm from './pages/ReviewForm'

const App = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/restaruants" element={<RestaurantList />} />
          <Route path="/add" element={<RestaurantForm />} />
          <Route path="/review/:id" element={<ReviewDetails />} />
          <Route path="/restaurants/:id" element={<RestaurantDetails />} />
          <Route path="restaurants/:id/reviews" element={<ReviewForm />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
