import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./components/shared/AppLayout";
import { SignupFormDemo } from "./components/shared/SignUp";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/sign-up",
    element: <SignupFormDemo />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
