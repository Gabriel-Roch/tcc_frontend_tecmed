import { HttpClient, HttpMethod } from "../../infra/http/httpClient.type";



export class AgreementService {
    constructor(private readonly httpClient: HttpClient) { }

    async getAll(){
        try{
            return await this.httpClient.request({
                endpoint : "",
                method : HttpMethod.POST
            })
        }catch(error){
            throw error
        }
    }

}