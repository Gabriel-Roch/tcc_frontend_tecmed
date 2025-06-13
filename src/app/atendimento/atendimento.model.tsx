import { useParams } from "react-router"
import { AtendimentoService } from "../../services/atendimento/atendimentoService"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { useNotification } from "../../context/notificationContext"
import { ProductService } from "../../services/product/productService"

export const atendimentoModel = (
    atendimentoService: AtendimentoService,
    atendimentoProduct: ProductService
) => {
    const params = useParams<{ id: string }>()

    const notification = useNotification()

    useEffect(() => {
        mutationStartService.mutate()
    }, [])

    const {
        ...propsAllProducts
    } = useQuery({
        queryKey: ['allProducts'],
        queryFn: () => atendimentoProduct.getAllProduct()
    })

    const {
        ...mutationStartService
    } = useMutation({
        mutationFn: async () => {
            return await atendimentoService.startService(params.id as string)
        }, onSuccess() {
            notification.openNotification({
                type: "success",
                message: "Atendimento Iniciado"
            })
        }, onError(error) {
            notification.openNotification({
                type: "error",
                message: "Error",
                description: error.message
            })
        }
    })

    const {
        ...mutationSubmitAtendimento
    } = useMutation({
        mutationFn: async (data: any) => {
            return await atendimentoService.createAtendimento(Object.assign(data, { id_service: params.id }))
        }, onSuccess() {
            notification.openNotification({
                type: "success",
                message: "Atendimento Concluido"
            })
        }, onError(error) {
            notification.openNotification({
                type: "error",
                message: "Error",
                description: error.message
            })
        }
    })

    return {
        params,
        mutationStartService,
        propsAllProducts,
        mutationSubmitAtendimento
    }
}