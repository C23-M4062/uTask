import Home from '../views/pages/home.js'
import Dashboard from '../views/pages/dashboard'
import Login from '../views/pages/login'
import About from '../views/pages/about'

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/dashboard': Dashboard,
  '/login': Login,
  '/about': About
}

export default routes
