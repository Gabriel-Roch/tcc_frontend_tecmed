import { useQuery } from "@tanstack/react-query";
import { MasterBloodService } from "../../services/masterBlood/masterBloodService";


export const useModelPatient = (masterBloodService: MasterBloodService) => {

    const {
        data: dataMasterBlood
    } = useQuery({
        queryKey: ["masterBlood"],
        queryFn: () => masterBloodService.getAll()
    })

    return {
        dataMasterBlood
    }
}