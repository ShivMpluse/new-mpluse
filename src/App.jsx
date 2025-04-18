import { createBrowserRouter, Router, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import AppLayout from "./components/layout/AppLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ContactUS from "./pages/ContactUS";
import TermsAndConditions from "./footer data/TermsAndConditions";
import TechnologyInfo from "./components/TechnologyInfo";

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
            path: "/terms-and-conditions",
            element: <TermsAndConditions />,
        },
        {
          path: '/privacy-policy',
          element: <TechnologyInfo />
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
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
