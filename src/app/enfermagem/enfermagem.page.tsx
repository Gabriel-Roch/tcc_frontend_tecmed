import { HttpFetchAdapter } from "../../infra/http/httpClient"
import { TotemService } from "../../services/totem/totemService"
import { EnfermagemModel } from "./enfermagem.model"
import EnfermagemView from "./enfermagem.view"

export default function EnfermagemPage() {
    const httpClient = new HttpFetchAdapter()
    const totemService = new TotemService(httpClient)
    const methods = EnfermagemModel(totemService)
    return <EnfermagemView {...methods} />
}