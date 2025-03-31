import { MenuProps, TableProps } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { MedicineManufacturerService } from "../../services/medicine-manufacturer/medicineManufacturerService";
import { AgreementService } from "../../services/medicalAgreement/agreementService";
import { MasterBloodService } from "../../services/masterBlood/masterBloodService";
import { useQuery } from "@tanstack/react-query";
import { IgetAllActive } from "../../services/medicine-manufacturer/medicine-manufacturer.type";
import { Iagreement } from "../../services/medicalAgreement/agreement.type";

type MenuItem = Required<MenuProps>['items'][number];

export const useOtherModel = (
    medicineManufacturer: MedicineManufacturerService,
    medicalAgreement: AgreementService,
    masterBlood: MasterBloodService
) => {

    const navigate = useNavigate()
    const [current, setCurrent] = useState('agreement')
    const location = useLocation()

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
        { title: 'ID', dataIndex: 'id_ma', key: 'id_ma', width: 200, align: "center", hidden: false }
    ]

    return {
        items,
        onClickMenu,
        current,
        propsQueryAllManufacturer,
        propsQueryAllAgreement,
        columnsAgreement,
        columnsManufacturer
    }
}