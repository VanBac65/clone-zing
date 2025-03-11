import { lazy, Suspense } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import CheckAuthRouter from "components/CheckAuthRouter";

const Layout = lazy(() => import("components/Layout/Layout"));
const HomePage = lazy(() => import("pages/UserManagement"));
const SignIn = lazy(() => import("pages/SignIn"));

function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <CheckAuthRouter />,
      children: [
        {
          path: "",
          element: <Layout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
          ],
        },
        {
          path: "sign-in",
          element: <SignIn />,
        },
      ],
    },
  ]);
  return (
    <>
      <Suspense>{element}</Suspense>
    </>
  );
}

export default App;
