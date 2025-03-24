import { useQuery } from "@tanstack/react-query";
import { IUserService } from "../../services/user/user";
import { Button, TableProps } from "antd";
import { IUsers } from "../../services/user/user.type";
import { useNavigate } from "react-router";

export const useUserModel = (userService: IUserService) => {

    const navigate = useNavigate()

    const {
        ...propsAllUsers
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
                return <Button onClick={() => navigate("/users/" + record.id_u)} >Editar usuario</Button>
            }
        }
    ];

    return {
        columns,
        propsAllUsers
    }
}