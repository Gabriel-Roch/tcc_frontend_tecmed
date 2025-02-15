import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useNavigate } from "react-router";

export default function MyMenu() {
    
    const navigate = useNavigate();

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: 'Início',
            onClick: () => navigate("/")
        },
        {
            key: '2',
            label: 'Sobre',
        },
        {
            key: '3',
            label: 'Configurações',
            children: [
                {
                    key: 'users',
                    label: "usuarios",
                    onClick: () => navigate("/users")
                }
            ]
        },
    ];

    return <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
    />;
};