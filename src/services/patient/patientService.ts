import { HttpClient, HttpMethod } from "../../infra/http/httpClient.type";
import { InewPatient } from "./patient.type";

export class PatientService {

    constructor(private readonly httpClient: HttpClient) { }

    async newPatient(data: InewPatient) {
        try {
            return await this.httpClient.request<{ message: string }>({
                endpoint: "/patient",
                method: HttpMethod.POST,
                body: data
            })
        } catch (error) {
            throw error
        }
    }

}