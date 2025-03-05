import { Button, Form, Input, Select } from "antd";
import { Option } from "antd/es/mentions";
import { useModelPatient } from "./patient.model";

type PatientViewProps = ReturnType<typeof useModelPatient>

export default function PatientView(props: PatientViewProps) {


    function handleSubmit(values: any) {
        console.log(values)
    }

    return (
        <Form
            onFinish={handleSubmit}
            className="w-6/12">
            <Form.Item
                name="name"
                label="Nome"
                rules={[
                    {
                        type: "string",
                        required: true,
                        message: 'Informe um nome!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="email"
                label="Email"
                rules={[
                    {
                        type: "email",
                        required: true,
                        message: 'Informe um email valido!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="Sexo"
                label="Sexo"
                hasFeedback
                rules={[{ required: true, message: 'Informe o sexo' }]}
            >
                <Select placeholder="selecione o sexo">
                    <Option value="M">Masculino</Option>
                    <Option value="F">Feminino</Option>
                </Select>
            </Form.Item>
            <Form.Item
                name="cpf"
                label="CPF"
                rules={[
                    {
                        max: 11,
                        pattern: /^[0-9]{11}$/,
                        type: "string",
                        required: true,
                        message: 'Informe apenas numeros',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="rg"
                label="RG"
                rules={[
                    {
                        max: 11,
                        pattern: /^[0-9]+$/,
                        type: "string",
                        required: true,
                        message: 'Informe apenas numeros',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="type_blood"
                label="Tipo Sanguineo"
                hasFeedback
                rules={[{ required: true, message: 'Informe o sexo' }]}
            >
                <Select
                    placeholder="selecione o sexo"
                    options={props.dataMasterBlood?.map((value) => {
                        return {
                            value: value.id_b,
                            label: value.b_name
                        }
                    })}
                />
            </Form.Item>
            <Button htmlType="submit">Enviar</Button>
        </Form >
    )
}