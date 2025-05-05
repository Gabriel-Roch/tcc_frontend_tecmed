import { HttpFetchAdapter } from "../../infra/http/httpClient";
import { UserService } from "../../services/user/user";
import { useEditUser } from "./editUser.model";
import EditUserView from "./editUser.view";

export default function EditUserPage() {
    const fetchAdapater = new HttpFetchAdapter()
    const users = new UserService(fetchAdapater)
    const methods = useEditUser(users)
    return <EditUserView {...methods} />
}