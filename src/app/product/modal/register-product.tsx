import { Button, Form, Input, InputNumber, Select } from "antd"
import { useModalComponent } from "../../../context/modalContext"
import { useProductModel } from "../product.model"

type propsView = ReturnType<typeof useProductModel>

export default function RegisterProductView(props: propsView) {

    const modal = useModalComponent()

    return (
        <Form
            form={props.formNewProduct}
            onFinish={props.propsMutationNewProduct.mutate}>

            <div className="flex gap-x-2">
                <Form.Item className="w-full" name="mp_name" label="Nome" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item className="w-full" name="category" label="Categoria" rules={[{ required: true }]}>
                    <Select key={"options_category"}>
                        <Select.Option key="medicamento" value="medicamento">medicamento</Select.Option>
                        <Select.Option key="limpeza" value="limpeza">limpeza</Select.Option>
                        <Select.Option key="insumos" value="insumos">insumos</Select.Option>
                    </Select>
                </Form.Item>
            </div>

            <div className="flex gap-x-2">

                <Form.Item className="w-full" name="distribution_unit_of_measure" label="Medida de Distribuição" rules={[{ required: true }]}>
                    <Select key={"distribution_unit_of_measure"}>
                        <Select.Option key="micrograma" value="micrograma">micrograma</Select.Option>
                        <Select.Option key="miligrama" value="miligrama">miligrama</Select.Option>
                        <Select.Option key="gramas" value="gramas">gramas</Select.Option>
                        <Select.Option key="mililitro" value="mililitro">mililitro</Select.Option>
                        <Select.Option key="gotas" value="gotas">gotas</Select.Option>
                        <Select.Option key="microgotas" value="microgotas">microgotas</Select.Option>
                        <Select.Option key="unidade" value="unidade">unidade</Select.Option>
                        <Select.Option key="litro" value="litro">litro</Select.Option>
                        <Select.Option key="quilograma" value="quilograma">quilograma</Select.Option>
                        <Select.Option key="comprimidos" value="comprimidos">comprimidos</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item className="w-full" name="quantity_per_measure" label="Quantidade por Medida" rules={[{ required: true, type: "number", message: "Apenas Numeros Positivos", min: 0 }]}>
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item className="w-full" name="current_stock" label="Estoque Atual" rules={[{ required: true, type: "number", message: "Apenas Numeros Positivos", min: 0 }]}>
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>

            </div>

            <div className="flex gap-x-2">
                <Form.Item className="w-full" name="min_stock_level" label="Estoque Minimo" rules={[{ required: true, type: "number", message: "Apenas Numeros Positivos", min: 0 }]}>
                    <InputNumber style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item className="w-full" name="fk_medicine_manufacturer" label="Fornecedor" rules={[{ required: true }]}>
                    <Select
                        options={props.propsQueryAllAgreement.data?.map((value) => {
                            return {
                                value: value.id_mm,
                                label: value.m_name
                            }
                        })}
                    />
                </Form.Item>
            </div>

            <div className="flex justify-end gap-x-2">
                <Button onClick={modal.closeModal}>Fechar</Button>
                <Button type="primary" htmlType="submit" loading={props.propsMutationNewProduct.status == "pending" ? true : false} >Salvar</Button>
            </div>
        </Form>
    )
}