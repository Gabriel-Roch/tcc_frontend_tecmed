import { Form, MenuProps, TableProps } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { MedicineManufacturerService } from "../../services/medicine-manufacturer/medicineManufacturerService";
import { AgreementService } from "../../services/medicalAgreement/agreementService";
import { MasterBloodService } from "../../services/masterBlood/masterBloodService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { IgetAllActive } from "../../services/medicine-manufacturer/medicine-manufacturer.type";
import { Iagreement } from "../../services/medicalAgreement/agreement.type";
import { IcreateAgreementForm, IsaveManufacturer } from "./other.type";
import { useNotification } from "../../context/notificationContext";
type MenuItem = Required<MenuProps>['items'][number];

export const useOtherModel = (
    medicineManufacturer: MedicineManufacturerService,
    medicalAgreement: AgreementService,
    _: MasterBloodService
) => {

    const navigate = useNavigate()
    const [current, setCurrent] = useState('agreement')
    const location = useLocation()
    const notification = useNotification()
    const [formNewManufacturer] = Form.useForm()
    const [formNewAgreement] = Form.useForm()

    useEffect(() => {
        if (location.pathname == "/others/agreement") {
            setCurrent("agreement")
        }
    }, [location])

    const items: MenuItem[] = [
        { label: 'Planos De Saude', key: 'agreement' },
        { label: "Fornecedor", key: "manufacturer" }
    ];

    const onClickMenu: MenuProps['onClick'] = (e) => {
        switch (e.key) {
            case "agreement":
                navigate("/others/agreement")
                break
            case "manufacturer":
                navigate("/others/manufacturer")
                break
        }
        setCurrent(e.key);
    };

    const {
        ...propsQueryAllManufacturer
    } = useQuery({
        queryKey: ["fetchAllManufacturer"],
        queryFn: () => medicineManufacturer.getAllActive()
    })

    const {
        ...propsQueryAllAgreement
    } = useQuery({
        queryKey: ["fetchAllAgreement"],
        queryFn: () => medicalAgreement.getAll()
    })

    const columnsManufacturer: TableProps<IgetAllActive>['columns'] = [
        { title: 'ID', dataIndex: 'id_mm', key: 'id_mm', width: 200, align: "center", hidden: false },
        { title: 'Nome Fornecedor', dataIndex: 'm_name', key: 'm_name', width: 200, align: "center", hidden: false },
        { title: 'CNPJ', dataIndex: 'cnpj', key: 'cnpj', width: 200, align: "center", hidden: false }

    ]

    const columnsAgreement: TableProps<Iagreement>['columns'] = [
        { title: 'ID', dataIndex: 'id_ma', key: 'id_ma', width: 200, align: "center", hidden: false },
        { title: 'Nome Do Plano', dataIndex: 'ma_name', key: 'ma_name', width: 200, align: "center", hidden: false },
        { title: 'CNPJ', dataIndex: 'cnpj', key: 'cnpj', width: 200, align: "center", hidden: false },
        { title: 'Contato', dataIndex: 'contact', key: 'contact', width: 200, align: "center", hidden: false },
        { title: 'Observação', dataIndex: 'remark', key: 'contact', width: 200, align: "center", hidden: false }
    ]

    const useMutationSubmitAgreement = () => {
        return useMutation({
            mutationFn: async (data: IcreateAgreementForm) => {
                return await medicalAgreement.create(data)
            },
            onSuccess: () => {
                notification.openNotification({
                    type: "success",
                    message: "Sucesso!"
                })
                formNewAgreement.resetFields()
                propsQueryAllAgreement.refetch()
            },
            onError: (error) => {
                notification.openNotification({
                    type: "error",
                    message: "Error",
                    description: error.message
                })
            }
        })
    }

    const {
        ...propsMutationAgreement
    } = useMutationSubmitAgreement()

    const useMutationSubmitManufacturer = () => {
        return useMutation({
            mutationFn: async (data: IsaveManufacturer) => {
                return await medicineManufacturer.create({
                    name: data.name,
                    cnpj: data.cnpj ? data.cnpj.toString() : ""
                })
            },
            onSuccess: () => {
                notification.openNotification({
                    type: "success",
                    message: "success!"
                })
                formNewManufacturer.resetFields()
                propsQueryAllManufacturer.refetch()
            },
            onError: (error) => {
                notification.openNotification({
                    type: "error",
                    message: "error",
                    description: error.message
                })
            }
        })
    }

    const {
        ...mutationSubmitManufacturer
    } = useMutationSubmitManufacturer()

    return {
        items,
        onClickMenu,
        current,
        propsQueryAllManufacturer,
        propsQueryAllAgreement,
        columnsAgreement,
        columnsManufacturer,
        mutationSubmitManufacturer,
        formNewManufacturer,
        propsMutationAgreement,
        formNewAgreement
    }
}