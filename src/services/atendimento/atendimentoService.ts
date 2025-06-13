import { HttpClient, HttpMethod } from "../../infra/http/httpClient.type";
import { Iatendimento } from "./atendimento.type";

export class AtendimentoService {
    constructor(private httpClient: HttpClient) { }

    private url = "/atendimento"

    async getAll() {
        try {
            return await this.httpClient.request<Promise<Iatendimento[]>>({
                endpoint: this.url,
                method: HttpMethod.GET
            })
        } catch (error) {
            throw error
        }
    }

    async startService(id: string) {
        try {
            return await this.httpClient.request({
                endpoint: this.url + `/${id}`,
                method: HttpMethod.PATCH
            })
        } catch (error) {
            throw error
        }
    }

    async createAtendimento(data: any) {
        try {
            return await this.httpClient.request({
                endpoint: this.url,
                method: HttpMethod.POST,
                body: data
            })
        } catch (error) {
            throw error
        }
    }
}