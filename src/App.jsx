import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import AppLayout from "./components/layout/AppLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TermsAndConditions from "./footer data/TermsAndConditions";
import RefundPolicyPage from "./components/RefundPolicyPage";
import DisclaimerPage from "./pages/DisclaimerPage";
import PrivacyPolicy from "./components/CompanyInfo/PrivacyPolicy";
import Blog from "./pages/Blog";
import Product from "./pages/Product";

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
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/product',
        element: <Product />
      },

      {
          path: "/terms-and-conditions",
          element: <TermsAndConditions />,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />
      },
      {
        path: '/refund-policy',
        element: <RefundPolicyPage />
      },
      {
        path:'/disclaimer',
        element: <DisclaimerPage />
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
