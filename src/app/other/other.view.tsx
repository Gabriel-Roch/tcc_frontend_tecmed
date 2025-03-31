import { Outlet } from "react-router"
import { useOtherModel } from "./other.model"
import { Menu } from "antd"

type propsView = ReturnType<typeof useOtherModel>

export default function OtherView(props: propsView) {
    return (
        <div className="w-full h-full ">
            <div>
                <Menu onClick={props.onClickMenu} selectedKeys={[props.current]} mode="horizontal" items={props.items} />
            </div>
            <Outlet />
        </div>
    )
}