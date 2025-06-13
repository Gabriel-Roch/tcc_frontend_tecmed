import { Input } from "antd"
import { EnfermagemModel } from "./enfermagem.model"

type propsView = ReturnType<typeof EnfermagemModel>

export default function EnfermagemView(props: propsView) {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="w-6/12 h-[60dvh]">
                <div className="grid grid-cols-2 h-full rounded-2xl shadow-md">
                    <div className="flex justify-center items-center bg-zinc-200">
                        <span className="text-justify text-2xl font-bold tracking-widest uppercase text-zinc-800 opacity-80">Enfermagem</span>
                    </div>
                    <div className="h-full">
                        <div className="h-[40%] bg-zinc-100 flex justify-center items-center text-2xl font-semibold">
                            Identificação
                        </div>
                        <form onSubmit={(event) => props.propsMutationTotem.mutate(event)} className="h-[60%] flex justify-between  flex-col gap-x-2 border-l border-zinc-200 px-2 bg-zinc-100">
                            <div className="flex items-center gap-x-2 w-full mt-8">
                                <label className="font-bold text-xl">CPF</label>
                                <Input name="cpf" className="w-full" />
                            </div>
                            <button type="submit" className="w-full mb-8 bg-green-500 text-zinc-100 py-1 rounded-sm hover:bg-green-700 transition-all opacity-80 duration-300 font-semibold tracking-widest uppercase">Confirmar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}