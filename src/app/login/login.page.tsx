import { HttpFetchAdapter } from "../../infra/http/httpClient";
import { LoginService } from "../../services/login/loginService";
import { useLoginModel } from "./login.model";
import LoginView from "./login.view";


export default function LoginPage() {
    const httpFetchAdapter = new HttpFetchAdapter()
    const loginService = new LoginService(httpFetchAdapter)
    const methods = useLoginModel(loginService)
    return <LoginView {...methods} />
}