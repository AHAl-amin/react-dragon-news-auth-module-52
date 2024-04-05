
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Layouts/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDettails from "../Pages/NewsDettails/NewsDettails";
import PrivetRouts from "./PrivetRouts";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() =>fetch('/news.json')
            },
            {
                path:'/news/:id',
                element:<PrivetRouts><NewsDettails></NewsDettails></PrivetRouts>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
])

export default router;