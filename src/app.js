import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import AboutUsComponent from "./components/AboutUsComponent";
import ContactUsComponent from "./components/ContactUsComponent";
import ErrorComponent from "./components/ErrorComponent";
import RestaurantComponent from "./components/RestaurantComponent";
//import GroceryComponent from "./components/GroceryComponent";

const AppLayoutComponent = () => (
  <div className="app">
    <HeaderComponent />
    <Outlet />
  </div>
);

const GroceryConfig = lazy(() => import("./components/GroceryComponent")); //added as lazy loading

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayoutComponent />,
    children: [
      { path: "/", element: <BodyComponent /> },
      { path: "/about", element: <AboutUsComponent /> },
      { path: "/contact", element: <ContactUsComponent /> },
      { path: "/restaurant/:id", element: <RestaurantComponent /> },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h3>Loading...</h3>}>
            <GroceryConfig />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayoutComponent />);
root.render(<RouterProvider router={appRouter} />);
