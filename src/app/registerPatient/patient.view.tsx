import {
    Button,
    ConfigProvider,
    Form,
    Input,
    Select
} from "antd";
import { useModelPatient } from "./patient.model";

const { Option } = Select;

type PatientViewProps = ReturnType<typeof useModelPatient>

export default function PatientView(props: PatientViewProps) {

    return (
        <div className="flex-grow m-3 bg-white border-2 border-[#8b85ff] rounded-t-md rounded-b-md">
            <div className="h-[3rem] bg-[#8b85ff] flex items-center pl-4">
                <h1 className="text-white font-semibold">Cadastrar Paciente</h1>
            </div>
            <Form
                onFinish={props.prospMutationCreatePatient.mutate}>
                <div className="flex gap-x-2 p-3">
                    <div className="w-full">
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
                            name="sexo"
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
                            name="birth"
                            label="Data Nascimento"
                            rules={[
                                {
                                    type: "date",
                                    required: true,
                                    message: 'Informe uma data valida!',
                                },
                            ]}
                        >
                            <Input type="date" />
                        </Form.Item>
                    </div>
                    <div className="w-full">
                        <Form.Item
                            name="type_blood"
                            label="Tipo sanguíneo"
                            hasFeedback
                            rules={[{ required: false, message: 'Informe o tipo sanguíneo' }]}
                        >
                            <Select
                                allowClear
                                placeholder="selecione o tipo sanguíneo">
                                {props.propsQueryMasterBlood.data?.map((value) => {
                                    return <Option key={value.b_name} value={value.id_b.toString()} >{value.b_name}</Option>
                                })}
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name="agreement"
                            label="Plano"
                            hasFeedback
                            rules={[{ required: true, message: 'Informe o plano' }]}
                        >
                            <Select
                                placeholder="selecione o plano">
                                {props.propsQueryMasterAgreement.data?.map((value) => {
                                    return <Option key={value.ma_name} value={value.id_ma.toString()} >{value.ma_name}</Option>
                                })}
                            </ Select >
                        </Form.Item>
                        <Form.Item
                            name="medical_agreement_number"
                            label="Numero Plano"
                            rules={[{ required: true, message: 'Informe um numero do plano' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            label="Numero de contato"
                            rules={[{ required: true, message: 'Informe um numero de contato' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="zipcode"
                            label="CEP"
                            rules={[{
                                pattern: /^[0-9]+$/,
                                type: "string",
                                required: true,
                                message: 'Informe apenas numeros',
                            }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="street"
                            label="Rua"
                            rules={[{
                                type: "string",
                                required: true,
                                message: 'Informe o nome da rua',
                            }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="complement"
                            label="Complemento"
                            rules={[{
                                type: "string",
                                required: false,
                                message: 'Informe o complemento',
                            }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="city"
                            label="Cidade"
                            rules={[{
                                type: "string",
                                required: true,
                                message: 'Informe o cidade',
                            }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="state"
                            label="Estado"
                            rules={[{
                                type: "string",
                                required: false,
                                message: 'Informe o estado',
                            }]}
                        >
                            <Input />
                        </Form.Item>
                    </div>
                </div>
                <div className="flex justify-end mr-4 mb-4">
                    <ConfigProvider theme={{
                        token: {
                            colorPrimary: "#673de6"
                        }
                    }}>
                        <Button className="" type="primary" htmlType="submit">Salvar</Button>
                    </ConfigProvider>
                </div>
            </Form >
        </div>

    )
}