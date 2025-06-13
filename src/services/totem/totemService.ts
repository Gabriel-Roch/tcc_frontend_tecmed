import { HttpClient, HttpMethod } from "../../infra/http/httpClient.type";

export class TotemService {

    constructor(private readonly httpClient: HttpClient) { }

    private readonly URL = "/totem"

    async checkin(params: { cpf: string }) {
        try {
            return await this.httpClient.request({
                endpoint: this.URL,
                method: HttpMethod.POST,
                body: params
            })
        } catch (error) {
            throw error
        }
    }

}
