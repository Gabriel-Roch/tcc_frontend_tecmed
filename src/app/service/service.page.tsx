import { HttpFetchAdapter } from "../../infra/http/httpClient";
import { serviceModel } from "./service.model";
import ServiceView from "./service.view";

export default function ServicePage() {
    const httpFetchAdapter = new HttpFetchAdapter()
    const methods = serviceModel()
    return <ServiceView {...methods} />
}