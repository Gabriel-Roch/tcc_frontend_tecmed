import { HttpClient, HttpMethod } from "../../infra/http/httpClient.type";
import { IgetAllPatient, InewPatient } from "./patient.type";

export class PatientService {

    constructor(private readonly httpClient: HttpClient) { }

    private readonly URL = "/patient"

    async newPatient(data: InewPatient) {
        try {
            return await this.httpClient.request<{ message: string }>({
                endpoint: this.URL,
                method: HttpMethod.POST,
                body: data
            })
        } catch (error) {
            throw error
        }
    }

    async getAllPatient() {
        try {
            return await this.httpClient.request<Promise<IgetAllPatient[]>>({
                endpoint: this.URL,
                method: HttpMethod.GET
            })
        } catch (error) {
            throw error
        }
    }

}