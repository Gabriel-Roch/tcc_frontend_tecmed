import { Table } from "antd"
import { useModelPatient } from "../../patient.model"

type propsView = ReturnType<typeof useModelPatient>

export const PatientListView = (props: propsView) => {
    return (
        <div className="m-3">
            <div className="bg-white rounded-md shadow-md">
                <Table
                    loading={props.propsQueryAllPatient.isLoading}
                    dataSource={props.propsQueryAllPatient.data}
                    columns={props.columns}
                    rowKey="id_p"
                    scroll={{ x: 'calc(100vw - 5vw)', y: "calc(100dvh - 5dvh)" }}
                />
            </div>
        </div>
    )
}