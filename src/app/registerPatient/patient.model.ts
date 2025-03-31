import { useMutation, useQuery } from "@tanstack/react-query";
import { MasterBloodService } from "../../services/masterBlood/masterBloodService";
import { AgreementService } from "../../services/medicalAgreement/agreementService";
import { typeSubmit } from "./patient.type";
import { PatientService } from "../../services/patient/patientService";
import { useNotification } from "../../context/notificationContext";
import { Form, MenuProps, TableProps } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { IgetAllPatient } from "../../services/patient/patient.type";

type MenuItem = Required<MenuProps>['items'][number];

export const useModelPatient = (
    masterBloodService: MasterBloodService,
    agreementService: AgreementService,
    patientService: PatientService
) => {

    const notification = useNotification()
    const [formNewPatient] = Form.useForm()
    const [current, setCurrent] = useState('patient');
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if (location.pathname == "/patient") {
            setCurrent("patient")
        }
    }, [location])

    const items: MenuItem[] = [
        {
            label: 'Pacientes',
            key: 'patient'
        },
        {
            label: 'Registrar Paciente',
            key: 'register-patient',
        }
    ];

    const onClickMenu: MenuProps['onClick'] = (e) => {
        switch (e.key) {
            case "patient":
                navigate("/patient")
                break
            case "register-patient":
                navigate("/patient/new")
                break
        }
        setCurrent(e.key);
    };

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

    const {
        ...propsQueryAllPatient
    } = useQuery({
        queryKey: ['fetchAllPatient'],
        queryFn: () => patientService.getAllPatient()
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
                formNewPatient.resetFields()
            },
            onError: (error) => {
                notification.openNotification({
                    type: "error",
                    message: error.message
                })
            }
        })
    }

    const {
        ...prospMutationCreatePatient
    } = useMutationCreatePatient()



    const columns: TableProps<IgetAllPatient>['columns'] = [
        { title: 'ID', dataIndex: 'id_p', key: 'id_p', width: 200, align: "center", hidden: true },
        { title: 'Nome', dataIndex: 'p_name', key: 'p_name', width: 300, align: "center" },
        { title: 'Sexo', dataIndex: 'sex', key: 'sex', width: 100, align: "center" },
        { title: 'CPF', dataIndex: 'cpf', key: 'cpf', width: 150, align: "center" },
        { title: 'RG', dataIndex: 'rg', key: 'rg', width: 100, align: "center" },
        { title: 'Data de Nascimento', dataIndex: 'birth', key: 'birth', width: 200, align: "center" },
        { title: 'Última Atualização Por', dataIndex: 'fk_last_update_user', key: 'fk_last_update_user', width: 200, align: "center" },
        { title: 'Número do Convênio Médico', dataIndex: 'medical_agreement_number', key: 'medical_agreement_number', width: 250, align: "center" },
        { title: 'Última Data de Atualização', dataIndex: 'last_date_update', key: 'last_date_update', width: 300, align: "center" },
        { title: 'Data de Criação', dataIndex: 'dt_create', key: 'dt_create', width: 200, align: "center" },
        { title: 'E-mail', dataIndex: 'email', key: 'email', width: 250, align: "center" },
        {
            title: 'Nome do Tipo Sanguíneo',
            dataIndex: ['master_blood', 'b_name'],
            key: 'master_blood_b_name',
            width: 200, align: "center"
        },
        {
            title: 'Nome do Convênio Médico',
            dataIndex: ['medical_agreement', 'ma_name'],
            key: 'medical_agreement_ma_name',
            width: 300, align: "center"
        },
        {
            title: 'Telefones',
            dataIndex: 'patients_telephone',
            key: 'patients_telephone',
            width: 200, align: "center",
            render: (phones: Array<{ tell: string }>) => phones.map(phone => phone.tell).join(', '),
        },
        {
            title: 'Endereço',
            dataIndex: 'patients_address',
            key: 'patients_address',
            width: 200, align: "center",
            render: (address: { street: string, city: string, state: string }) => `${address.street}, ${address.city}, ${address.state}`,
        },
    ];

    return {
        formNewPatient,
        propsQueryMasterAgreement,
        propsQueryMasterBlood,
        prospMutationCreatePatient,
        items,
        current,
        onClickMenu,
        columns,
        propsQueryAllPatient
    }
}