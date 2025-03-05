import { HttpFetchAdapter } from "../../infra/http/httpClient";
import { MasterBloodService } from "../../services/masterBlood/masterBloodService";
import { useModelPatient } from "./patient.model";
import PatientView from "./patient.view";



export default function UsePatientPage() {
    const httpAdapter = new HttpFetchAdapter()
    const masterBloodService = new MasterBloodService(httpAdapter)
    const methods = useModelPatient(masterBloodService)
    return <PatientView {...methods} />
}