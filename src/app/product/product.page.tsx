import { HttpFetchAdapter } from "../../infra/http/httpClient";
import { ProductService } from "../../services/product/productService";
import { useProduct } from "./product.model";
import RegisterProductView from "./product.view";



export default function ProductPage() {
    const httpFetchAdapter = new HttpFetchAdapter()
    const productService = new ProductService(httpFetchAdapter)
    const methods = useProduct(productService)
    return <RegisterProductView {...methods} />
}