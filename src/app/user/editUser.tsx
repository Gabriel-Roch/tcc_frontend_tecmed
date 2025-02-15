import { ModalComponente } from "../../components/modal";
import { Button } from "antd";
import { useModalComponent } from "../../context/modalContext";

interface editUserProps {
    idUser: number
}

export default function EditUser({ idUser }: editUserProps) {

    const modal = useModalComponent()

    function handleSubmit() {
        alert(idUser)
    }

    return (
        <ModalComponente.Root>
            <ModalComponente.Button>TESTE</ModalComponente.Button>
            <ModalComponente.Content footer={null}
                title="Novo usuario">
                <form onSubmit={handleSubmit}>

                    CONTENT...

                    <div className="flex justify-end gap-x-2">
                        <Button onClick={modal.closeModal} type="primary" >Fechar</Button>
                        <Button htmlType="submit">Enviar</Button>
                    </div>
                </form>
            </ModalComponente.Content>
        </ModalComponente.Root>
    )
}