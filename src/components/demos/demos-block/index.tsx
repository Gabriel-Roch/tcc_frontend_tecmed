import type { FC, ReactNode } from 'react'


interface Props {
    title: string
    padding?: string
    background?: string
    children?: ReactNode
}

export const DemoBlock: FC<Props> = props => {
    return (
        <div className="mb-3 last:pb-8">
            <div className="px-3 pt-3 pb-2 text-[#697b8c] text-sm dark:text-[#959da6]">
                {props.title}
            </div>
            <div
                className="border-r-0 border-l-0"
                style={{
                    padding: props.padding,
                    background: props.background,
                }}
            >
                {props.children}
            </div>
        </div>
    )
}

DemoBlock.defaultProps = {
    padding: '12px 12px',
    background: 'var(--adm-color-background)',
}