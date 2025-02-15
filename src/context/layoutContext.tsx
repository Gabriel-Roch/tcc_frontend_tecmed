import { createContext, useContext, useState, ReactNode } from "react";

const LayoutContext = createContext<{ title: string; setTitle: (title: string) => void } | undefined>(undefined);

export function LayoutProvider({ children }: { children: ReactNode }) {
    const [title, setTitle] = useState("Página Inicial");

    return (
        <LayoutContext.Provider value={{ title, setTitle }}>
            {children}
        </LayoutContext.Provider>
    );
}

export function useLayout() {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error("useLayout deve ser usado dentro de um LayoutProvider");
    }
    return context;
}