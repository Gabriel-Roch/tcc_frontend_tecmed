import { useMutation, useQuery } from "@tanstack/react-query"
import { ProductService } from "../../services/product/productService"
import { Form, TableProps } from "antd"
import { IgetAllProduct } from "../../services/product/product.type"
import { MedicineManufacturerService } from "../../services/medicine-manufacturer/medicineManufacturerService"
import { IformCreate } from "./product.type"
import { useNotification } from "../../context/notificationContext"


export const useProductModel = (
    product: ProductService,
    medicineManufacturer: MedicineManufacturerService
) => {

    const [formNewProduct] = Form.useForm()
    const notification = useNotification()

    const {
        ...propsQueryAllProduct
    } = useQuery({
        queryKey: ["fetchAllProduct"],
        queryFn: () => product.getAllProduct()
    })

    const {
        ...propsQueryAllAgreement
    } = useQuery({
        queryKey: ["fetchAllAgreement"],
        queryFn: () => medicineManufacturer.getAllActive()
    })

    const columns: TableProps<IgetAllProduct>['columns'] = [
        { title: 'ID', dataIndex: 'id_mp', key: 'id_mp' },
        { title: 'Nome do Material', dataIndex: 'mp_name', key: 'mp_name' },
        { title: 'Unidade de Medida de Distribuição', dataIndex: 'distribution_unit_of_measure', key: 'distribution_unit_of_measure' },
        { title: 'Quantidade por Medida', dataIndex: 'quantity_per_measure', key: 'quantity_per_measure' },
        { title: 'Estoque Atual', dataIndex: 'current_stock', key: 'current_stock' },
        { title: 'Estoque Reservado', dataIndex: 'reserved_stock', key: 'reserved_stock' },
        { title: 'Nível Mínimo de Estoque', dataIndex: 'min_stock_level', key: 'min_stock_level' },
        { title: 'ID do Usuário Registrado', dataIndex: 'id_register_user', key: 'id_register_user' },
        { title: 'Responsável pelo Registro', dataIndex: 'register_user', key: 'register_user' },
        { title: 'Nome do Fabricante', dataIndex: 'name_manufacturer', key: 'name_manufacturer' },
    ]

    const useMutationNewProduct = () => {
        return useMutation({
            mutationFn: async (data: IformCreate) => {
                return await product.createProduct(data)
            },
            onSuccess: () => {
                notification.openNotification({
                    type: "success",
                    message: "Produto Cadastrado!"
                })
                formNewProduct.resetFields()
                propsQueryAllProduct.refetch()
            },
            onError: () => {
                notification.openNotification({
                    type: "error",
                    message: "Error ao cadastrar Produto!",
                    description: "Verifique as informaçoes e tente novamente"
                })
            }
        })
    }

    const {
        ...propsMutationNewProduct
    } = useMutationNewProduct()

    return {
        columns,
        propsQueryAllProduct,
        propsMutationNewProduct,
        formNewProduct,
        propsQueryAllAgreement
    }
}