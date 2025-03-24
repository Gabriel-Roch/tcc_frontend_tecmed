import { useEditUser } from "./editUser.model"

type propsView = ReturnType<typeof useEditUser>

export default function EditUserView(props: propsView) {
    return (
        <>
            Edit user + {props.params.id}
        </>
    )
}