import { useQuery } from "@tanstack/react-query";
import { IUserService } from "../../services/user/user";
import { TableProps } from "antd";
import { IUsers } from "../../services/user/user.type";
import ModalProvider from "../../context/modalContext";
import EditUser from "./editUser";

export const useUserModel = (userService: IUserService) => {

    const {
        data: allUsers,
        error: errorAllUsers,
        refetch: reloadUsers,
        isLoading: loadingUsers
    } = useQuery({
        queryKey: ['allUsers'],
        queryFn: () => userService.getUsers(),
        retry: false
    })

    const columns: TableProps<IUsers>['columns'] = [
        {
            title: 'id',
            dataIndex: 'id_u',
            key: 'id',
        },
        {
            title: 'Name',
            dataIndex: 'u_name',
            key: 'u_name',
        },
        {
            title: 'CPF',
            dataIndex: 'cpf',
            key: 'cpf',
        },
        {
            title: "Date",
            dataIndex: "dt_create",
            key: "dt_create"
        },
        {
            render: (_, record) => {
                return (
                    <ModalProvider>
                        <EditUser
                            {...userService}
                            key={`user${record.id_u}`}
                            idUser={record.id_u}
                        />
                    </ModalProvider>
                )
            }
        }
    ];

    return {
        allUsers,
        errorAllUsers,
        reloadUsers,
        columns,
        loadingUsers
    }
}