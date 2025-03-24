import { Table } from "antd"
import { useProduct } from "./product.model"


type propsView = ReturnType<typeof useProduct>


export default function ProductView(props: propsView) {
    return (
        <div className="h-full w-full p-3">
            <div className="bg-white rounded-md shadow-md">
                <Table
                    loading={false}
                    dataSource={[]}
                    columns={[]}
                    rowKey="id_u"
                />
            </div>
        </div>
    )
}