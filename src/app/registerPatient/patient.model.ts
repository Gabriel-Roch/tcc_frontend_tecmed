import { useQuery } from "@tanstack/react-query";
import { MasterBloodService } from "../../services/masterBlood/masterBloodService";
import { AgreementService } from "../../services/medicalAgreement/agreementService";
import { typeSubmit } from "./patient.type";
import { PatientService } from "../../services/patient/patientService";
import { useNotification } from "../../context/notificationContext";


export const useModelPatient = (
    masterBloodService: MasterBloodService,
    agreementService: AgreementService,
    patientService: PatientService
) => {

    const notification = useNotification()

    const {
        data: dataMasterBlood
    } = useQuery({
        queryKey: ["masterBlood"],
        queryFn: () => masterBloodService.getAll()
    })

    const {
        data: dataAgreement
    } = useQuery({
        queryKey: ["masterAgreement"],
        queryFn: () => agreementService.getAll()
    })

    async function handleSubmit(values: typeSubmit) {
        try {
            const response = await patientService.newPatient({
                name: values.name,
                birth: values.birth,
                cpf: values.cpf,
                email: values.email,
                medical_agreement: Number(values.agreement),
                rg: values.rg,
                sex: values.sexo,
                type_blood: Number(values.type_blood),
                medical_agreement_number: values.medical_agreement_number,
                telephones: [{
                    tell: values.phone,
                    description: ""
                }],
                address: {
                    city: values.city,
                    complement: values.complement,
                    description: "",
                    neighborhood: "",
                    region: "",
                    state: values.state,
                    street: values.street,
                    state_abbr: "",
                    unit: "",
                    zip_code: values.zipcode
                }
            })
            notification.openNotification({
                message: response.message,
                type: "success"
            })
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            notification.openNotification({
                type: "error",
                message: errorMessage
            })
        }
    }

    return {
        dataMasterBlood,
        dataAgreement,
        handleSubmit
    }
}