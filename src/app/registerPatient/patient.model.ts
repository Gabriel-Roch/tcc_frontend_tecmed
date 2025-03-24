import { useMutation, useQuery } from "@tanstack/react-query";
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
        ...propsQueryMasterBlood
    } = useQuery({
        queryKey: ["masterBlood"],
        queryFn: () => masterBloodService.getAll()
    })

    const {
        ...propsQueryMasterAgreement
    } = useQuery({
        queryKey: ["masterAgreement"],
        queryFn: () => agreementService.getAll()
    })

    const useMutationCreatePatient = () => {
        return useMutation({
            mutationFn: async (values: typeSubmit) => {
                return await patientService.newPatient({
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
            },
            onSuccess: (data) => {
                notification.openNotification({
                    message: data.message,
                    type: "success"
                })
            },
            onError: (error) => {
                const errorMessage = error instanceof Error ? error.message : String(error);
                notification.openNotification({
                    type: "error",
                    message: errorMessage
                })
            }
        })
    }

    const {
        ...prospMutationCreatePatient
    } = useMutationCreatePatient()

    return {
        propsQueryMasterAgreement,
        propsQueryMasterBlood,
        prospMutationCreatePatient
    }
}