import Home from "./views/Home"
import Blog from "./views/Blog"
import Projects from "./views/Projects"



const routes = [
 {
    path: "/",
    element: <Home/>
 },
 {
   path:"/Blog",
   element: <Blog/>
 },
 {
  path: "/Projects",
  element: <Projects/>
 }
 


]

export default routes