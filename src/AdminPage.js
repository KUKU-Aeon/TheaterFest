import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import {Link} from "react-router-dom";
import React from "react";
const items = [
    {
        label:  <Link to="/make-bill">Новая афиша</Link>,
        key: '0',
    },
    {
        type: 'divider',
    },
];
const AdminMenu = () => (
    <main>
        <Dropdown
            menu={{
                items,
            }}
            trigger={['click']}
        >
            <a onClick={(e) => e.preventDefault()}>
                <Space style={{cursor: 'pointer', marginTop: 50}}>
                    Выберите действие
                    <DownOutlined />
                </Space>
            </a>
        </Dropdown>
    </main>
);
export default AdminMenu;