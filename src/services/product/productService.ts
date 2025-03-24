import { HttpClient, HttpMethod } from "../../infra/http/httpClient.type";
import { IcreateProduct, IgetAllProduct } from "./product.type";


export class ProductService {
    constructor(private readonly httpClient: HttpClient) { }

    private readonly URL = "/medicine-product"

    async getAllProduct() {
        try {
            return await this.httpClient.request<Promise<IgetAllProduct[]>>({
                endpoint: this.URL,
                method: HttpMethod.GET
            })
        } catch (error) {
            throw error
        }
    }

    async createProduct(data: IcreateProduct) {
        try {
            return await this.httpClient.request<Promise<void>>({
                endpoint: this.URL,
                method: HttpMethod.POST,
                body: data
            })
        } catch (error) {
            throw error
        }
    }

}