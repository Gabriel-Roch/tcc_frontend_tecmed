import { HttpClient, HttpMethod } from "../../infra/http/httpClient.type";
import { IgetAllActive } from "./medicine-manufacturer.type";



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
}