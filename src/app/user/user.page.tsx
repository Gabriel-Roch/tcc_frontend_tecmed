import { HttpFetchAdapter } from "../../infra/http/httpClient"
import { UserService } from "../../services/user/user"
import { useUserModel } from "./user.model"
import UserView from "./user.view"

export default function UserPage() {
    const httpFetchAdapter = new HttpFetchAdapter()
    const userService = new UserService(httpFetchAdapter)
    const methods = useUserModel(userService)
    return <UserView {...methods} />
}