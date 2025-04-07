import type { FC, ReactNode } from 'react'

export const DemoDescription: FC<{
    content?: ReactNode
    children?: ReactNode
}> = (props) => {
    return (
        <div className="text-weak">
            {props.content || props.children}
        </div>
    )
}