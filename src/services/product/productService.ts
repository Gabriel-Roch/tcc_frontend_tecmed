import { HttpClient } from "../../infra/http/httpClient.type";


export class ProductService {
    constructor(private httpClient: HttpClient) { }
}