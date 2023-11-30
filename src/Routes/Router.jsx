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
import UserFeadBack from "../Pages/Dashborad/UserFeadBack/UserFeadBack";
import UserReport from "../Pages/Dashborad/USeReport/UserReport";
import UserResponse from "../Pages/Dashborad/UserResponse/UserResponse";
import AllServayResponse from "../Pages/Dashborad/AllServayResponse/AllServayResponse";
import UpdateSErvay from "../Pages/Dashborad/MyServay/UpdateSErvay";
import AdminFEadback from "../Pages/Dashborad/AdminFeadback/AdminFEadback";
import UserProfile from "../Layout/UserProfile/UserProfile";
import Response from "../Pages/Dashborad/AllServayResponse/Response";

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
        element: <Conact></Conact>,
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
        path: "profile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "userfeedback",
        element: (
          <ServayRoutes>
            <UserFeadBack></UserFeadBack>
          </ServayRoutes>
        ),
      },
      {
        path: "userReport",
        element: (
          <ServayRoutes>
            <UserReport></UserReport>
          </ServayRoutes>
        ),
      },
      {
        path: "userResponse",
        element: (
          <ServayRoutes>
            <UserResponse></UserResponse>
          </ServayRoutes>
        ),
      },
      {
        path: "dashbord/response/:id",
        element: <Response></Response>,
       
      },
      {
        path: "AdminFeadback",
        element: (
          <ServayRoutes>
            <AdminFEadback></AdminFEadback>
          </ServayRoutes>
        ),
      },
      {
        path: "myservey",
        element: (
          <ServayRoutes>
            <MyServay></MyServay>
          </ServayRoutes>
        ),
      },
      {
        path: "updateServay/:id",
        element: (
          <ServayRoutes>
            <UpdateSErvay></UpdateSErvay>
          </ServayRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/myServay/${params.id}`),
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
      {
        path: "Allresponse",
        element: (
          <AdminRoute>
            <AllServayResponse></AllServayResponse>
          </AdminRoute>
        ),
      },
    ],
  },
]);
