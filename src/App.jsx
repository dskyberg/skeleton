import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/Root";
import Home from "./routes/Home";
import About from "./routes/About";
import Error from "./routes/Error";

import Promise, { promiseLoader } from "./routes/Promise";

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
      { path: "promise", loader: promiseLoader, element: <Promise /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
