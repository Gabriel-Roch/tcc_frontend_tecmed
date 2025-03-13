import { HttpClient, HttpMethod } from "../../infra/http/httpClient.type";
import { Iagreement } from "./agreement.type";



export class AgreementService {
    constructor(private readonly httpClient: HttpClient) { }

    async getAll(){
        try{
            return await this.httpClient.request<Iagreement[]>({
                endpoint : "/master/agreement",
                method : HttpMethod.GET 
            })
        }catch(error){
            throw error
        }
    }

}