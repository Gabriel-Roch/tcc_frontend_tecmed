import { Modal, ModalProps } from "antd";
import { ReactNode } from "react";
import { useModalComponent } from "../../context/modalContext";

interface ModalContentProps extends ModalProps {
    children: ReactNode
}

export default function ModalContent({ children, ...props }: ModalContentProps) {
    const modal = useModalComponent()
    return (
        <Modal {...props}
            open={modal.open}
            onCancel={modal.closeModal}
            okButtonProps={{
                hidden: true
            }}
            cancelButtonProps={{
                hidden: true
            }}
        >
            {children}
        </Modal>
    )
}