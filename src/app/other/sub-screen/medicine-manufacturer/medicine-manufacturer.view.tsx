import { Button, Form, Input, Table } from "antd"
import { useOtherModel } from "../../other.model"
import ModalProvider from "../../../../context/modalContext"
import { ModalComponente } from "../../../../components/modal"

type propsView = ReturnType<typeof useOtherModel>

export default function MedicineManufacturerView(props: propsView) {
    return (
        <div className="m-3">
            <div className="mb-3">
                <ModalProvider>
                    <ModalComponente.Root>
                        <ModalComponente.Button type="primary">
                            Novo Fornecedor
                        </ModalComponente.Button>
                        <ModalComponente.Content width={700} title="Novo Fornecedor" footer={null}>
                            <Form
                                form={props.formNewManufacturer}
                                onFinish={props.mutationSubmitManufacturer.mutate}
                            >
                                <div className="flex gap-x-4">
                                    <Form.Item className="w-full" name="name" label="Nome" rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>
                                    <Form.Item className="w-full" name="cnpj" label="CNPJ" rules={[{ required: false }]}>
                                        <Input />
                                    </Form.Item>
                                </div>
                                <div className="flex justify-end">
                                    <Button htmlType="submit" type="primary">Salvar</Button>
                                </div>
                            </Form>
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