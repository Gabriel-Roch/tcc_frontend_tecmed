import { Table } from "antd"
import { useOtherModel } from "../../other.model"
import ModalProvider from "../../../../context/modalContext"
import { ModalComponente } from "../../../../components/modal"

type propsView = ReturnType<typeof useOtherModel>

export default function MedicineManufacturerView(props: propsView) {
    return (
        <div className="w-6/12 m-3">
            <div className="mb-3">
                <ModalProvider>
                    <ModalComponente.Root>
                        <ModalComponente.Button type="primary">
                            Novo Fornecedor
                        </ModalComponente.Button>
                        <ModalComponente.Content title="Novo Fornecedor" footer={null}>
                            W.I.P
                        </ModalComponente.Content>
                    </ModalComponente.Root>
                </ModalProvider>
            </div>
            <div className="bg-white rounded-md shadow-md">
                <Table
                    columns={props.columnsManufacturer}
                    dataSource={props.propsQueryAllManufacturer.data}
                    loading={props.propsQueryAllManufacturer.isLoading}
                    rowKey={"id_mm"}
                />
            </div>
        </div>
    )
}