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
import GST_Verification from "./pages/GST_Verification";
import PAN_Verification from "./pages/PAN_Verification";
import ErrorPage from "./components/layout/ErrorPage";
import Banking_Service from "./pages/Banking_Service";
import KYC_Onboarding from "./pages/KYC_Onboarding";
import Upi from "./components/Project/UPI_Payment_Solution/Upi";

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
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
        element:<Product />
        
      }, 
      {
        path: "/product/GST-verification",
        element: <GST_Verification />
      }, 
      {
        path: "/product/PAN-verification",
        element: <PAN_Verification />
      }, 
      {
        path: "/product/Banking-service",
        element: <Banking_Service />
      },  
      {
        path: "/product/UPI-payment-solution",
        element: <Upi />
      },
      {
        path: "/product/kyc-onboarding",
        element: <KYC_Onboarding />
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
  