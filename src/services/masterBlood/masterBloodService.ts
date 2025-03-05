import { HttpClient, HttpMethod } from "../../infra/http/httpClient.type";
import { ImasterBlood } from "./blood.type";



export class MasterBloodService {
    constructor(private readonly httpClient: HttpClient) { }

    async getAll(){ 
        try{
            return await this.httpClient.request<ImasterBlood[]>({
                endpoint : "/master/blood",
                method : HttpMethod.GET
            })
        }catch(error){
            throw error
        }
    }

}