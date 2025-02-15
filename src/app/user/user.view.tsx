
import { Table } from "antd"
import { useUserModel } from "./user.model"

type UserViewProps = ReturnType<typeof useUserModel>

export default function UserView(props: UserViewProps) {

    const {
        allUsers,
        errorAllUsers,
        reloadUsers,
        columns,
        loadingUsers
    } = props


    return (
        <div className="h-full w-full">
            <Table
                loading={loadingUsers}
                dataSource={allUsers}
                columns={columns}
                rowKey="id_u"
            />
        </div>
    )
}