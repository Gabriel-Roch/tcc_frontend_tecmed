import { createBrowserRouter } from "react-router";
import App from "../App";
import UserPage from "../app/user/user.page";
import LoginPage from "../app/login/login.page";
import UsePatientPage from "../app/registerPatient/patient.page";
import EditUserPage from "../app/edit-user/editUser.page";
import ProductPage from "../app/product/product.page";

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
                    title: "Usuarios"
                }
            },
            {
                path: "/users/:id",
                element: <EditUserPage />
            },
            {
                path: "/patient/new",
                element: <UsePatientPage />,
                handle: {
                    title: "Cadastrar Paciente"
                }
            },
            {
                path: "/product/new",
                element: <ProductPage />
            }
        ],
    },
]);
