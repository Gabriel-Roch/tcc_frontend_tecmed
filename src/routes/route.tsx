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
import { ProtectedRoute } from "../components/protectRoute/protectedRoute";
import ServicePage from "../app/service/service.page";
import TotemPage from "../app/totem/totem.page";
import EnfermagemPage from "../app/enfermagem/enfermagem.page";
import AtendimentoPage from "../app/atendimento/atendimento.page";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        element: (
            <ProtectedRoute requiredRoles={['user']}>
                <App />
            </ProtectedRoute>
        ),
        children: [
            {
                path: "/",
                element: "home"
            },
            {
                path: "/users",
                element: (
                    <ProtectedRoute requiredRoles={['user']}>
                        <UserPage />
                    </ProtectedRoute>
                )
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
            },
            {
                path: "/service",
                element: <ServicePage />
            },
            {
                path: "/atendimento/:id",
                element: <AtendimentoPage />
            }
        ],
    },
    {
        path: "/mobile",
        element: <MobilePage />
    },
    {
        path: "/totem",
        element: <TotemPage />
    },
    {
        path: "/enfermagem",
        element: <EnfermagemPage />
    }
]);
