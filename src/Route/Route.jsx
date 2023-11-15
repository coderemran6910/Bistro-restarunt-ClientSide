import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import {createBrowserRouter} from "react-router-dom";
import Menu from "../Pages/Menu/Menu/Menu";
import FoodOrder from "../Pages/FoodOrder/FoodOrder";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
           {
            path: '/',
            element: <Home></Home>
           },
           {
            path: 'menu',
            element: <Menu></Menu>
           },
           {
            path: 'order/:category',
            element: <FoodOrder></FoodOrder>
           }
        ]
    }
])

export default router