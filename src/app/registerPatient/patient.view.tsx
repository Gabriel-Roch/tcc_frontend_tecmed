
import { Outlet } from "react-router";
import { useModelPatient } from "./patient.model";
import { Menu } from "antd";

type PatientViewProps = ReturnType<typeof useModelPatient>

export default function PatientView(props: PatientViewProps) {
    return (
        <div className="w-full h-full ">
            <div>
                <Menu onClick={props.onClickMenu} selectedKeys={[props.current]} mode="horizontal" items={props.items} />
            </div>
            <Outlet />
        </div>

    )
}