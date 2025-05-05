import { serviceModel } from "./service.model"


type propsView = ReturnType<typeof serviceModel>

export default function ServiceView(props: propsView) {
    return (
        <>
            service
        </>
    )
}