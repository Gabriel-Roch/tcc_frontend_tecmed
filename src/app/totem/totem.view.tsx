import { ReactNode } from "react"
import { totemModel } from "./totem.model"
import { useNavigate } from "react-router"

type propsView = ReturnType<typeof totemModel>

interface cardProps {
    children: ReactNode
    to: string
}


export default function TotemView(_: propsView) {

    const navigate = useNavigate()

    const Card = (props: cardProps) => {
        return (
            <div onClick={() => navigate(props.to)} className="w-full h-[25dvh] bg-white shadow-md flex items-center justify-center text-6xl hover:cursor-pointer">
                {props.children}
            </div>
        )
    }

    return (
        <div className="h-full w-full bg-zinc-100">
            <div className="h-[8dvh] flex items-center justify-center">
                <span className="text-6xl">
                    Auto Atendimento
                </span>
            </div>
            <div className="grow">
                <div className="h-full gap-x-2 mx-2 grid grid-cols-2 mt-10">
                    <Card to="/enfermagem" >Enfermagem</Card>
                    <Card to="/enfermagem">Acompanhar Atendimento</Card>
                </div>
            </div>
        </div>
    )
}