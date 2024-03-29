import React from "react";
import useId from "../hooks/useid";
import Register from "../pages/Register";
import Favourite from "../pages/Favourite";
import MyProfile from "../pages/MyProfile";
import AddNewHouse from "../pages/AddNewHouse";

const HomePage = React.lazy(() => import("../pages/Home"));
const Properties = React.lazy(() => import("../pages/Properties"));
const HouseItem = React.lazy(() => import("../pages/HouseItem"));

export const navbar = [
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <HomePage />
      </React.Suspense>
    ),
    title: "Home",
    path: "/home",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Properties />
      </React.Suspense>
    ),
    title: "Properties",
    path: "/properties",
    private: false,
    hidden: false,
  },
  {
    id: useId,
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <HouseItem />
      </React.Suspense>
    ),
    title: "Single House",
    path: "/properties/:id",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <Register />,
    title: "Sing In",
    path: "/singin",
    private: false,
    hidden: true,
  },
  {
    id: useId,
    element: <MyProfile />,
    title: "My Profile",
    path: "/myprofile",
    private: true,
    hidden: true,
  },
  {
    id: useId,
    element: <AddNewHouse />,
    title: "Add New House",
    path: "/myprofile/newhouse",
    private: true,
    hidden: true,
  },
  {
    id: useId,
    element: <AddNewHouse />,
    title: "Add New House",
    path: "/myprofile/edithouse/:id",
    private: true,
    hidden: true,
  },
  {
    id: useId,
    element: <Favourite />,
    title: "Favourite",
    path: "/favourite",
    private: true,
    hidden: true,
  },
  {
    id: useId,
    element: <h1>Generic Sing Up</h1>,
    title: "Sing Up",
    path: "/singup",
    private: false,
    hidden: true,
  },
];
