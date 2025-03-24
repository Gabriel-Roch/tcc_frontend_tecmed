import { useParams } from "react-router"
import { UserService } from "../../services/user/user"

export const useEditUser = (_: UserService) => {

    const params = useParams<{ id: string }>()

    return {
        params
    }
}