import { totemModel } from "./totem.model"

type propsView = ReturnType<typeof totemModel>

export default function TotemView(props: propsView) {
    return (
        <>
            totem view
        </>
    )
}