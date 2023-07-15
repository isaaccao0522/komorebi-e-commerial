import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


//Pages
import Root from "./route/root";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import Shipping from "./pages/Shipping";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:id",
        element: <ProductDetail />,
      },
      {
        path: "/checkout/shipping",
        element: <Shipping />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
