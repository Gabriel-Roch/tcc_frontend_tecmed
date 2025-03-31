import { HttpClient, HttpMethod } from "../../infra/http/httpClient.type";
import { Icreate, IgetAllActive } from "./medicine-manufacturer.type";



export class MedicineManufacturerService {
    constructor(private readonly httpClient: HttpClient) { }

    private readonly URL = "/medicine-manufacturer"

    async getAllActive() {
        try {
            return await this.httpClient.request<Promise<IgetAllActive[]>>({
                endpoint: this.URL,
                method: HttpMethod.GET
            })
        } catch (error) {
            throw error
        }
    }

    async create(data: Icreate) {
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