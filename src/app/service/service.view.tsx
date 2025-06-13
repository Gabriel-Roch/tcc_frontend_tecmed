import { useNavigate } from "react-router"
import { serviceModel } from "./service.model"


type propsView = ReturnType<typeof serviceModel>

export default function ServiceView(props: propsView) {

    const navigate = useNavigate()

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {props.propsQueryAtendimento.data?.map((value) => (
                <div
                    key={value.id_service}
                    className="bg-white border border-zinc-200 rounded-2xl shadow-md p-4 flex flex-col gap-2"
                >
                    <h3 className="text-xl font-bold text-zinc-800">{value.p_name}</h3>
                    <p className="text-sm text-zinc-600">CPF: {value.cpf}</p>
                    <p className="text-sm text-zinc-600">Sexo: {value.sex}</p>
                    <p className="text-sm text-zinc-600">
                        Status:{" "}
                        <span
                            className={`font-semibold ${value._status === "start"
                                ? "text-yellow-500"
                                : value._status === "progress"
                                    ? "text-blue-500"
                                    : "text-green-600"
                                }`}
                        >
                            {value._status}
                        </span>
                    </p>

                    <button
                        onClick={() => navigate("/atendimento/" + value.id_service)}
                        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-xl transition"
                    >
                        Iniciar atendimento
                    </button>
                </div>
            ))}
        </div>

    )
}