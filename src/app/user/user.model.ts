import { useQuery } from "@tanstack/react-query";
import { IUserService } from "../../services/user/user";

export const useUserModel = (userService: IUserService) => {
    
    const {
        data: allUsers,
        error: errorAllUsers,
        refetch : reloadUsers
    } = useQuery({
        queryKey: ['allUsers'],
        queryFn: () => userService.getUsers(),
        retry: false
    })

    return {
        allUsers,
        errorAllUsers,
        reloadUsers
    }
}