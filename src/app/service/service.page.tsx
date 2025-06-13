import { HttpFetchAdapter } from "../../infra/http/httpClient";
import { AtendimentoService } from "../../services/atendimento/atendimentoService";
import { serviceModel } from "./service.model";
import ServiceView from "./service.view";

export default function ServicePage() {
    const httpFetchAdapter = new HttpFetchAdapter()
    const atendimentoService = new AtendimentoService(httpFetchAdapter)
    const methods = serviceModel(atendimentoService)
    return <ServiceView {...methods} />
}