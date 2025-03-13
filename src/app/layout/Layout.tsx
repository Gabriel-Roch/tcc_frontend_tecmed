import { ReactNode } from 'react';
import {
    Layout
} from 'antd';
import MyMenu from './layout.menu';

const { Header, Content, Sider } = Layout;

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
                    <div className="flex flex-col h-screen">
                        <Content className="flex-grow bg-[#f4f5ff]">
                            {children}
                        </Content>
                        {/* <Footer
                            style={{
                                backgroundColor: "white"
                            }}
                            className="py-4 text-center">
                            @RochaCorporation
                        </Footer> */}
                    </div>
                </Layout>
            </Layout>
        </Layout >
    );
};

