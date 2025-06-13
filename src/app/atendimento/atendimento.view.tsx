import { Form, Input, Select, Button, Space, Typography } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { atendimentoModel } from "./atendimento.model";

type propsView = ReturnType<typeof atendimentoModel>;

const { TextArea } = Input;
const { Text } = Typography;

export default function AtendimentoView(props: propsView) {
    const medicamentos = props.propsAllProducts.data || [];
    const [form] = Form.useForm();
    return (
        <div className="p-3">
            <Form onFinish={props.mutationSubmitAtendimento.mutate} layout="vertical" form={form}>
                <Form.Item
                    label="Descrição do Atendimento"
                    name="descricao"
                    rules={[{ required: true, message: "Por favor, descreva o atendimento" }]}
                >
                    <TextArea rows={4} placeholder="Descreva aqui o atendimento realizado..." />
                </Form.Item>

                <Form.List name="medicamentos">
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map(({ key, name, ...restField }) => (
                                <Space key={key} align="baseline" style={{ display: "flex", marginBottom: 8 }}>
                                    <Form.Item
                                        {...restField}
                                        name={[name, "id_mp"]}
                                        rules={[
                                            { required: true, message: "Selecione um medicamento" },
                                            {
                                                validator(_, value) {
                                                    const todos: any[] = form.getFieldValue("medicamentos") || [];
                                                    const idsDuplicados = todos.filter((item, index) =>
                                                        todos.findIndex((i) => i?.id_mp === item?.id_mp) !== index
                                                    ).map((item) => item.id_mp);

                                                    if (idsDuplicados.includes(value)) {
                                                        return Promise.reject(new Error("Medicamento já adicionado"));
                                                    }
                                                    return Promise.resolve();
                                                }
                                            }
                                        ]}
                                    >
                                        <Select placeholder="Medicamento">
                                            {medicamentos.map((med) => (
                                                <Select.Option key={med.id_mp} value={med.id_mp}>
                                                    {med.mp_name}
                                                </Select.Option>
                                            ))}
                                        </Select>
                                    </Form.Item>

                                    <Form.Item
                                        {...restField}
                                        name={[name, "quantidade"]}
                                        rules={[
                                            { required: true, message: "Informe a quantidade" },
                                            {
                                                validator(_, value) {
                                                    const idSelecionado = form.getFieldValue(["medicamentos", name, "id_mp"]);
                                                    const selecionado = medicamentos.find((m) => m.id_mp === idSelecionado);
                                                    if (!value || !selecionado) return Promise.resolve();

                                                    if (value > selecionado.current_stock) {
                                                        return Promise.reject(new Error(`Máximo permitido: ${selecionado.current_stock}`));
                                                    }

                                                    return Promise.resolve();
                                                },
                                            },
                                        ]}
                                    >
                                        <Input type="number" min={1} placeholder="Qtd." style={{ width: 100 }} />
                                    </Form.Item>

                                    <MinusCircleOutlined onClick={() => remove(name)} />

                                    <Form.Item shouldUpdate noStyle>
                                        {() => {
                                            const idSelecionado = form.getFieldValue(["medicamentos", name, "id_mp"]);
                                            const selecionado = medicamentos.find((m) => m.id_mp === idSelecionado);
                                            return (
                                                <Text type="secondary" style={{ marginLeft: 8 }}>
                                                    {selecionado ? `Estoque: ${selecionado.current_stock}` : ""}
                                                </Text>
                                            );
                                        }}
                                    </Form.Item>
                                </Space>
                            ))}

                            <Form.Item>
                                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                    Adicionar Medicamento
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>
                <div>
                    <Button htmlType="submit">Submit</Button>
                </div>
            </Form>
        </div>
    );
}
