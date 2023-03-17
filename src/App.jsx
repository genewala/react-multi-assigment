
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import Home from "./pages/Home"
import Layout from "./pages/Layout";
import AboutMe from './pages/AboutMe';
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:
      [
        {path: "/", element: <Home />},
        {path: "/contact", element: <Contact/> },
        {path: "/aboutme", element: <AboutMe/> },
        {path: "/experience", element: <Experience/> }
      ],
      
    },
]);
  return <RouterProvider router={router} />;
}



export default App
