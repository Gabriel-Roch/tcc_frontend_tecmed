import { serviceModel } from "./service.model"


type propsView = ReturnType<typeof serviceModel>

export default function ServiceView(_: propsView) {
    return (
        <>
            service
        </>
    )
}