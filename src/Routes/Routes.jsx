import { createBrowserRouter } from "react-router-dom"; 
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ViewMore from "../Pages/Home/Projects/ViewMore";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: "/projects/:id" ,
          element: <ViewMore></ViewMore>
        }

      ]
    },
  ]);