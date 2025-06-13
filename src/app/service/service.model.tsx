import { useQuery } from "@tanstack/react-query"
import { AtendimentoService } from "../../services/atendimento/atendimentoService"


export const serviceModel = (atendimento: AtendimentoService) => {


    const {
        ...propsQueryAtendimento
    } = useQuery({
        queryKey: ["atendimento"],
        queryFn: () => atendimento.getAll()
    })

    return { propsQueryAtendimento }
}