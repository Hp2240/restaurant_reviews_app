import './App.css'
import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Home from './pages/Home'
import RestaurantList from './pages/RestaurantList'
// import RestaurantForm from './pages/RetaurantForm'
import ReviewDetails from './pages/ReviewDetails'
import RestaurantDetails from './pages/RestaurantDetails'
import ReviewForm from './pages/ReviewForm'
import { BASE_URL } from './globals'
// import { restaurants } from '../../controllers'

const App = () => {
  const [restaruants, setRestaurants] = useState([])

  useEffect(() => {
    const getRestaurants = async () => {
      const res = await axios.get(`${BASE_URL}/api/restaurants`)
      setRestaurants(res.data)
    }
    getRestaurants()
  }, [])

  return (
    <div>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="/restaruants"
            element={<RestaurantList restarants={restaurants} />}
          />
          {/* <Route path="/add" element={<RestaurantForm />} /> */}
          <Route path="/review/:id" element={<ReviewDetails />} />
          <Route path="/restaurants/:id" element={<RestaurantDetails />} />
          <Route path="restaurants/:id/reviews" element={<ReviewForm />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
