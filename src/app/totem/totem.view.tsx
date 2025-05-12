import { ReactNode } from "react"
import { totemModel } from "./totem.model"

type propsView = ReturnType<typeof totemModel>

interface cardProps {
    children: ReactNode
}

export const Card = (props: cardProps) => {
    return (
        <div className="w-full h-[25dvh] bg-white shadow-md flex items-center justify-center text-6xl hover:cursor-pointer">
            {props.children}
        </div>
    )
}

export default function TotemView(_: propsView) {
    return (
        <div className="h-full w-full bg-zinc-100">
            <div className="h-[8dvh] flex items-center justify-center">
                <span className="text-6xl">
                    AutoAtendimento
                </span>
            </div>
            <div className="grow">
                <div className="h-full gap-x-2 mx-2 grid grid-cols-2 mt-10">
                    <Card>Iniciar Atendimento</Card>
                    <Card>ENFERMAGEM</Card>
                </div>
            </div>
        </div>
    )
}