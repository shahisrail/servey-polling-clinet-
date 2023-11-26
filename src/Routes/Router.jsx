import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import DashBord from "../Layout/DashBord";
import ServayCreate from "../Pages/Dashborad/ServayCreate/ServayCreate";
import AllUsers from "../Pages/Dashborad/Allusers/AllUsers";
import SignUp from "../Pages/Shared/Regestratoin/SignUp";
import Surveys from "../Pages/Surveys/Surveys";
// import SurveysDetails from "../Pages/SurveysDetails/SurveysDetails";
import About from "../Pages/AboutUS/About";
import Pricing from "../Pages/Pricing/Pricing";
import Servayadmin from "../Pages/Dashborad/ServayForAdmin/Servayadmin";
import Payment from "../Pages/Pricing/Payment";
// import ServayRouts from "./ServayRouts";
// import AdminRoutes from "./AdminRoute"
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
      // {
      //   path: "/SurveyDetails",
      //   element: <SurveysDetails></SurveysDetails>,
      // },
      {
        path: "/Pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "peyment",
        element: <Payment></Payment>,
      },
      // {
      //   path: "/Surveys",
      //   element: <Surveys></Surveys>,
      // },
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
      {
        path: "servayCreate",
        element: <ServayCreate></ServayCreate>,
      },

      // admin routes
      {
        path: "allUser",
        element: (
          // <AdminRoutes>

          <AllUsers></AllUsers>
        ),
        // </AdminRoutes>
      },
      {
        path: "survey",
        element: <Servayadmin></Servayadmin>,
      },
    ],
  },
]);
