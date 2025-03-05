import { HttpClient, HttpMethod } from "../../infra/http/httpClient.type";
import { Ilogin } from "./login.type";


export class LoginService {

    constructor(private readonly httpClient: HttpClient) { }

    async login(data: Ilogin): Promise<{ access_token: string }> {
        try {
            const response = await this.httpClient.request({
                endpoint: "/auth/login",
                method: HttpMethod.POST,
                body: data
            })
            return response as { access_token: string }

        } catch (error) {
            throw error
        }
    }

}