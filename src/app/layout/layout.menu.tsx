import type { MenuProps } from 'antd';
import { ConfigProvider, Menu } from 'antd';
import {
    ClipboardMinus,
    House,
    PanelRight,
    Plus,
    Settings,
    ShoppingCart,
    Users
} from 'lucide-react';
import { useNavigate } from "react-router";

export default function MyMenu() {

    const navigate = useNavigate();

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: 'Início',
            icon: <House className='size-4' />,
            onClick: () => navigate("/")
        },
        {
            key: '2',
            label: 'Paciente',
            icon: <ClipboardMinus className='size-4' />,
            onClick: () => navigate("/patient")
        },
        {
            key: '3',
            label: 'Configurações',
            icon: <Settings className='size-4' />,
            children: [
                {
                    key: 'users',
                    label: "usuarios",
                    icon: <Users className='size-4' />,
                    onClick: () => navigate("/users")
                }
            ]
        },
        {
            key: "4",
            label: "Produtos",
            icon: <ShoppingCart className='size-4' />,
            children: [
                {
                    key: 'register_product',
                    label: "Registrar",
                    icon: <Plus className='size-4' />,
                    onClick: () => navigate("/product/new")
                }
            ]
        },
        {
            key: "5",
            label: "Outros",
            icon: <PanelRight className="size-4" />,
            onClick: () => navigate("/others/agreement")
        }
    ];

    return <ConfigProvider theme={{
        components: {
            Menu: {
                itemHoverBg: "#f1ecff",
                itemSelectedBg: "#f1ecff",
                itemSelectedColor: "#a44ad1",
                itemActiveBg: "#f1ecff"

            }
        }
    }}>
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
        />;
    </ConfigProvider>
};