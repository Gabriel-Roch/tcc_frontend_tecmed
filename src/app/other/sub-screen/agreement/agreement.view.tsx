import { Table } from "antd"
import { useOtherModel } from "../../other.model"

type propsView = ReturnType<typeof useOtherModel>

export default function AgreementView(props: propsView) {
    return (
        <div className="m-3">
            <div className="bg-white rounded-md shadow-md">
                <Table
                    columns={props.columnsAgreement}
                    dataSource={props.propsQueryAllAgreement.data}
                    loading={props.propsQueryAllAgreement.isLoading}
                    rowKey={"id_ma"}
                />
            </div>
        </div>
    )
}