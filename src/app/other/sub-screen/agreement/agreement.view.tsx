import { Button, Form, Input, Table } from "antd"
import { useOtherModel } from "../../other.model"
import ModalProvider from "../../../../context/modalContext"
import { ModalComponente } from "../../../../components/modal"

type propsView = ReturnType<typeof useOtherModel>

export default function AgreementView(props: propsView) {
    return (
        <div className="m-3">
            <ModalProvider>
                <ModalComponente.Root>
                    <ModalComponente.Button type="primary" className="mb-3">Novo Plano</ModalComponente.Button>
                    <ModalComponente.Content width={700} title="Novo Plano" footer={null}>
                        <Form
                            form={props.formNewAgreement}
                            onFinish={props.propsMutationAgreement.mutate}
                        >
                            <div className="flex gap-x-2">
                                <Form.Item className="w-full" name="ma_name" label="Nome" rules={[{ required: true }]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item className="w-full" name="cnpj" label="CNPJ" rules={[{ required: true }]}>
                                    <Input />
                                </Form.Item>
                            </div>
                            <div className="flex gap-x-2">
                                <Form.Item className="w-full" name="contact" label="Contato" rules={[{ required: true }]}>
                                    <Input />
                                </Form.Item>
                                <Form.Item className="w-full" name="remark" label="Observação" rules={[{ required: true }]}>
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