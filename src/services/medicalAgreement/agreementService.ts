import { HttpClient, HttpMethod } from "../../infra/http/httpClient.type";
import { Iagreement, IcreateAgreement } from "./agreement.type";



export class AgreementService {
    constructor(private readonly httpClient: HttpClient) { }

    private readonly URL = "/master/agreement"

    async getAll() {
        try {
            return await this.httpClient.request<Iagreement[]>({
                endpoint: this.URL,
                method: HttpMethod.GET
            })
        } catch (error) {
            throw error
        }
    }

    async create(data: IcreateAgreement) {
        try {
            return await this.httpClient.request({
                endpoint: this.URL,
                method: HttpMethod.POST,
                body: data
            })
        } catch (error) {
            throw error
        }
    }

}