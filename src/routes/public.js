import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Auth from "../pages/Auth/Auth";
// import Map from '../pages/Map'

const routes = [
  { path: "/login", component: Login, exact: true },
  { path: "/signup", component: Signup, exact: true },
  { path: "/auth", component: Auth, exact: true },
];

export default routes;
