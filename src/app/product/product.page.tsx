import { HttpFetchAdapter } from "../../infra/http/httpClient";
import { MedicineManufacturerService } from "../../services/medicine-manufacturer/medicineManufacturerService";
import { ProductService } from "../../services/product/productService";
import { useProductModel } from "./product.model";
import RegisterProductView from "./product.view";



export default function ProductPage() {
    const httpFetchAdapter = new HttpFetchAdapter()
    const productService = new ProductService(httpFetchAdapter)
    const medicineManufacturerService = new MedicineManufacturerService(httpFetchAdapter)
    const methods = useProductModel(productService, medicineManufacturerService)
    return <RegisterProductView {...methods} />
}