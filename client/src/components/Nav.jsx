import { NavLink } from 'react-router-dom'
const Nav = () => {
  return (
    <nav>
      <h2>iRate</h2>
      <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/restaurants">Restaurants</NavLink>
      <NavLink to="/add">Add A Restaurant</NavLink>
    </div>
    </nav>
  )
}

export default Nav