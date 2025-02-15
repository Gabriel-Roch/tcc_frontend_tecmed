
import { useUserModel } from "./user.model"

type UserViewProps = ReturnType<typeof useUserModel>

export default function UserView(props: UserViewProps) {
    const { allUsers, errorAllUsers, reloadUsers } = props

    return (
        <div className="h-full w-full">
            {allUsers?.map((value) => {
                return value.name
            })}
        </div>
    )
}