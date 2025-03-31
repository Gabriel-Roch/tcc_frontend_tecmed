import { HttpFetchAdapter } from "../../infra/http/httpClient";
import { MasterBloodService } from "../../services/masterBlood/masterBloodService";
import { AgreementService } from "../../services/medicalAgreement/agreementService";
import { MedicineManufacturerService } from "../../services/medicine-manufacturer/medicineManufacturerService";
import { useOtherModel } from "./other.model";
import OtherView from "./other.view";

export default function OtherPage() {
    const httpFetchAdapter = new HttpFetchAdapter()
    const medicineManufacturer = new MedicineManufacturerService(httpFetchAdapter)
    const medicalAgreement = new AgreementService(httpFetchAdapter)
    const masterBloodService = new MasterBloodService(httpFetchAdapter)
    const methods = useOtherModel(medicineManufacturer, medicalAgreement, masterBloodService)
    return <OtherView {...methods} />
}