import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/Root";
import Home from "./routes/Home";
import About from "./routes/About";
import Error from "./routes/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "about", element: <About /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
