import { HttpClient, HttpMethod } from "../../infra/http/httpClient.type";
import { Ilogin } from "./login.type";


export class LoginService {

    constructor(private readonly httpClient: HttpClient) { }

    async login(data: Ilogin) {
        try {
            return await this.httpClient.request<Promise<{ access_token: string }>>({
                endpoint: "/auth/login",
                method: HttpMethod.POST,
                body: data
            })
        } catch (error) {
            throw error
        }
    }

}