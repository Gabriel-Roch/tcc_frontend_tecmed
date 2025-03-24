
import { Table } from "antd"
import { useUserModel } from "./user.model"

type UserViewProps = ReturnType<typeof useUserModel>

export default function UserView(props: UserViewProps) {
    return (
        <div className="h-full w-full p-3">
            <div className="bg-white rounded-md shadow-md">
                <Table
                    loading={props.propsAllUsers.isLoading}
                    dataSource={props.propsAllUsers.data}
                    columns={props.columns}
                    rowKey="id_u"
                />
            </div>
        </div>
    )
}