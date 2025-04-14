import { createBrowserRouter, Router, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import AppLayout from "./components/layout/AppLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ContactUS from "./pages/ContactUS";

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/contactus',
          element: <ContactUS  />
        }
    ]
  }
]);


function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
