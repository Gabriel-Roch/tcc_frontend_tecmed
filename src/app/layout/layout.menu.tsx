import type { MenuProps } from 'antd';
import { ConfigProvider, Menu } from 'antd';
import {
    ClipboardMinus,
    House,
    Plus,
    Settings,
    ShoppingCart,
    UserPlus,
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
            children: [
                {
                    key: "register_patient",
                    icon: <UserPlus className='size-4' />,
                    label: "Cadastrar Paciente",
                    onClick: () => navigate("/patient/new")
                }
            ]
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