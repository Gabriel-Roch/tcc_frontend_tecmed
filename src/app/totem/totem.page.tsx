// import { HttpFetchAdapter } from "../../infra/http/htt2pClient";
import { totemModel } from "./totem.model";
import TotemView from "./totem.view";


export default function TotemPage() {
    // const httpFetchAdpater = new HttpFetchAdapter()
    const methods = totemModel()
    return <TotemView {...methods} />
}