import { ReactNode } from 'react';
import {
    ConfigProvider,
    Layout
} from 'antd';
import MyMenu from './layout.menu';

const { Header, Sider } = Layout;

interface LayoutSidebarProps {
    children: ReactNode
    title: string
}

export default function LayoutSidebar({ children, title }: LayoutSidebarProps) {

    return (
        <Layout className="h-screen">
            <Header
                className='border-b border-zinc-200'
                style={{
                    backgroundColor: "white"
                }}>
                <span className='text-black'>
                    {title}
                </span>
            </Header>
            <Layout className="h-full flex">
                <div className='h-full flex border-r border-zinc-200'>
                    <Sider
                        theme='light'
                        className="fixed bottom-0 overflow-y-auto"
                        collapsible>
                        <MyMenu />
                    </Sider>
                </div>
                <Layout
                    className="overflow-auto h-full">
                    <ConfigProvider theme={{
                        token: {
                            colorPrimary: "#673de6"
                        }
                    }}>
                        {children}
                    </ConfigProvider>
                </Layout>
            </Layout>
        </Layout >
    );
};

