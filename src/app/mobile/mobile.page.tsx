// import { HttpFetchAdapter } from "../../infra/http/httpClient";
import { useMobileModel } from "./mobile.model";
import MobileView from "./mobile.view";


export default function MobilePage() {
    // const httpFetchAdapter = new HttpFetchAdapter()
    const methods = useMobileModel()
    return <MobileView {...methods} />
}