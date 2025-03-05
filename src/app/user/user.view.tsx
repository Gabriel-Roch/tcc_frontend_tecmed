
import { Table } from "antd"
import { useUserModel } from "./user.model"

type UserViewProps = ReturnType<typeof useUserModel>

export default function UserView(props: UserViewProps) {

    const {
        allUsers,
        columns,
        loadingUsers
    } = props

    return (
        <div className="h-full w-full p-3">
            <div className="bg-white rounded-md shadow-md">
                <Table
                    loading={loadingUsers}
                    dataSource={allUsers}
                    columns={columns}
                    rowKey="id_u"
                />
            </div>
        </div>
    )
}