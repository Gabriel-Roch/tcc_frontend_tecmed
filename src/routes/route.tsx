import { createBrowserRouter } from "react-router";
import App from "../App";
import UserPage from "../app/user/user.page";
import LoginPage from "../app/login/login.page";
import UsePatientPage from "../app/registerPatient/patient.page";
import EditUserPage from "../app/edit-user/editUser.page";
import ProductPage from "../app/product/product.page";
import RegisterPatientPage from "../app/registerPatient/sub-screen/register-patient/register-patient.page";
import { PatientListPage } from "../app/registerPatient/sub-screen/patient-list/patient-list.page";
import OtherPage from "../app/other/other.page";
import AgreementPage from "../app/other/sub-screen/agreement/agreement.page";
import MedicineManufacturerPage from "../app/other/sub-screen/medicine-manufacturer/medicine-manufacturer.page";
import MobilePage from "../app/mobile/mobile.page";

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
                element: "home"
            },
            {
                path: "/users",
                element: <UserPage />
            },
            {
                path: "/users/:id",
                element: <EditUserPage />
            },
            {
                path: "/patient",
                element: <UsePatientPage />,
                children: [
                    {
                        path: "",
                        element: <PatientListPage />
                    },
                    {
                        path: "new",
                        element: <RegisterPatientPage />
                    }
                ]
            },
            {
                path: "/product/new",
                element: <ProductPage />
            },
            {
                path: "/others",
                element: <OtherPage />,
                children: [
                    {
                        path: "agreement",
                        element: <AgreementPage />
                    },
                    {
                        path: "manufacturer",
                        element: <MedicineManufacturerPage />
                    }
                ]
            }
        ],
    },
    {
        path: "/mobile",
        element: <MobilePage />
    }
]);
