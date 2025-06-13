import { HttpFetchAdapter } from "../../infra/http/httpClient";
import { AtendimentoService } from "../../services/atendimento/atendimentoService";
import { ProductService } from "../../services/product/productService";
import { atendimentoModel } from "./atendimento.model";
import AtendimentoView from "./atendimento.view";

export default function AtendimentoPage() {
    const httpFetchAdapter = new HttpFetchAdapter()
    const atendimentoService = new AtendimentoService(httpFetchAdapter)
    const productService = new ProductService(httpFetchAdapter)
    const methods = atendimentoModel(atendimentoService, productService)
    return <AtendimentoView {...methods} />
}