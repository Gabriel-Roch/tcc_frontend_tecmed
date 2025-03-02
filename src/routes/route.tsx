
import { createBrowserRouter } from "react-router";
import App from "../App";
import UserPage from "../app/user/user.page";
import LoginPage from "../app/login/login.page";


export const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: "home",
                handle: {
                    title: "Inicio"
                },
            },
            {
                path: "/users",
                element: <UserPage />,
                handle: {
                    title: "usuarios"
                }
            }
        ],
    },
]);
