import { ModalComponente } from "../../components/modal";
import { Button } from "antd";
import { useModalComponent } from "../../context/modalContext";
import { UserService } from "../../services/user/user";
import { useQuery } from "@tanstack/react-query";

interface editUserProps extends Pick<UserService, "getUserById"> {
    idUser: number
}

export default function EditUser({ idUser, getUserById }: editUserProps) {

    const modal = useModalComponent()

    function handleSubmit() {
        alert(idUser)
    }

    const {
        isLoading
    } = useQuery({
        queryKey: ["getUserByid"],
        queryFn: () => getUserById(idUser)
    })

    return (
        <ModalComponente.Root>
            <ModalComponente.Button>TESTE</ModalComponente.Button>
            <ModalComponente.Content
                maskClosable={false}
                loading={isLoading}
                footer={null}
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