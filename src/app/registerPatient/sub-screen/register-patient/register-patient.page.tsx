import { HttpFetchAdapter } from "../../../../infra/http/httpClient"
import { MasterBloodService } from "../../../../services/masterBlood/masterBloodService"
import { AgreementService } from "../../../../services/medicalAgreement/agreementService"
import { PatientService } from "../../../../services/patient/patientService"
import { useModelPatient } from "../../patient.model"
import { RegisterPatientView } from "./register-patient.view"

export default function RegisterPatientPage() {
    const httpAdapter = new HttpFetchAdapter()
    const masterBloodService = new MasterBloodService(httpAdapter)
    const agreementService = new AgreementService(httpAdapter)
    const patientService = new PatientService(httpAdapter)
    const methods = useModelPatient(masterBloodService, agreementService, patientService)
    return <RegisterPatientView {...methods} />
}