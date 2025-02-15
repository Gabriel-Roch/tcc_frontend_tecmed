import { Button, ButtonProps } from "antd";
import { ReactNode } from "react";
import { useModalComponent } from "../../context/modalContext";

interface ModalButtonProps extends ButtonProps {
    children: ReactNode
}

export default function ModalButton({ children, ...props }: ModalButtonProps) {
    const modal = useModalComponent()
    return <Button onClick={modal.openModal} {...props}>{children}</Button>
}