import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import DashBord from "../Layout/DashBord";
import ServayCreate from "../Pages/Dashborad/ServayCreate/ServayCreate";
import AllUsers from "../Pages/Dashborad/Allusers/AllUsers";
import SignUp from "../Pages/Shared/Regestratoin/SignUp";
import Surveys from "../Pages/Surveys/Surveys";
import About from "../Pages/AboutUS/About";
import Pricing from "../Pages/Pricing/Pricing";
import Servayadmin from "../Pages/Dashborad/ServayForAdmin/Servayadmin";
import Payment from "../Pages/Pricing/Payment";
import MyServay from "../Pages/Dashborad/MyServay/MyServay";
import ServayRoutes from "./ServayRoutes";
import AdminRoute from "./AdminRoute";
import ServayorDetails from "../Pages/Surveys/ServayorDetails";
import PrivateRoutes from "./PrivateRoutes";
import PaymentHistory from "../Pages/Dashborad/PaymentHistory/PaymentHistory";
import Conact from "../Pages/Concat/Conact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",

        element: <About></About>,
      },
      {
        path: "/Surveys",
        element: <Surveys></Surveys>,
      },
      {
        path: "/SurveyorDetails/:id",
        element: <ServayorDetails></ServayorDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/servay/${params.id}`),
      },
      {
        path: "/Pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "/Contact",
        element: <Conact></Conact>
      },
      {
        path: "peyment",
        element: (
          <PrivateRoutes>
            <Payment></Payment>,
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signin",
    element: <SignUp></SignUp>,
  },
  {
    path: "dashboard",
    element: <DashBord></DashBord>,
    children: [
      //  servay routes
      {
        path: "servayCreate",
        element: (
          <ServayRoutes>
            <ServayCreate></ServayCreate>,
          </ServayRoutes>
        ),
      },
      {
        path: "myservey",
        element: <MyServay></MyServay>,
      },

      // admin routes
      {
        path: "allUser",
        element: (
          // <AdminRoutes>

          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
        // </AdminRoutes>
      },
      {
        path: "survey",
        element: (
          <AdminRoute>
            <Servayadmin></Servayadmin>
          </AdminRoute>
        ),
      },
      {
        path: "history",
        element: (
          <AdminRoute>
            <PaymentHistory></PaymentHistory>
          </AdminRoute>
        ),
      },
    ],
  },
]);
