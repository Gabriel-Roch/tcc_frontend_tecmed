import { Table } from "antd"
import { useProductModel } from "./product.model"
import ModalProvider from "../../context/modalContext"
import { ModalComponente } from "../../components/modal"
import RegisterProductView from "./modal/register-product"

type propsView = ReturnType<typeof useProductModel>

export default function ProductView(props: propsView) {

    return (
        <div className="h-full w-full p-3">
            <div className="mb-3">
                <ModalProvider>
                    <ModalComponente.Root>
                        <ModalComponente.Button
                            type="primary"
                        >
                            Cadastrar Novo Produto
                        </ModalComponente.Button>
                        <ModalComponente.Content
                            width={"60%"}
                            footer={null}
                            title="Novo Produto">
                            <RegisterProductView {...props} />
                        </ModalComponente.Content>
                    </ModalComponente.Root>
                </ModalProvider>
            </div>
            <div className="bg-white rounded-md shadow-md">
                <Table
                    loading={props.propsQueryAllProduct.isLoading}
                    dataSource={props.propsQueryAllProduct.data}
                    columns={props.columns}
                    rowKey="id_mp"
                />
            </div>
        </div>
    )
}