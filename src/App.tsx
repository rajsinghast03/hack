import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./components/shared/AppLayout";
import { SignupFormDemo } from "./components/shared/SignUp";
import RecipeLayout from "./components/shared/RecipeLayout";
import LoginFormDemo from "./components/shared/Login";
import Dashboard from "./components/dashboard/dash";
import NutrientOverview from "./components/shared/NutrientOverview";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category/:searchText",
        element: <RecipeLayout />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignupFormDemo />,
  },
  {
    path: "/login",
    element: <LoginFormDemo />,
  },
  {
    path: "/userinfo",
    element: <Dashboard />,
  },
  {
    path: "/score",
    element: <NutrientOverview />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
