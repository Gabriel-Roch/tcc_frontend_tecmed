import { createContext, ReactNode, useContext, useState } from "react";

interface ImodalContext {
    closeModal: () => void
    openModal: () => void
    open: boolean
}

export const ModalComponentContext = createContext<ImodalContext | undefined>(undefined)

interface ModalRootProps {
    children: ReactNode
}

export default function ModalProvider({ children }: ModalRootProps) {

    const [open, setOpen] = useState<boolean>(false)

    function closeModal() {
        setOpen(false)
    }

    function openModal() {
        setOpen(true)
    }

    return (
        <ModalComponentContext.Provider value={{
            closeModal,
            openModal,
            open
        }}>
            {children}
        </ModalComponentContext.Provider>
    )
}

export function useModalComponent() {
    const context = useContext(ModalComponentContext)
    if (!context) {
        throw new Error("useModalComponent deve ser usado dentro de um ModalComponentContext.Provider");
    }
    return context;
} 