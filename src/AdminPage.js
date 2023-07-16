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
        label: <a href="#">2nd menu item</a>,
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: '3rd menu item',
        key: '3',
    },
];
const AdminMenu = () => (
    <Dropdown
        menu={{
            items,
        }}
        trigger={['click']}
    >
        <a onClick={(e) => e.preventDefault()}>
            <Space style={{cursor: 'pointer'}}>
                Click me
                <DownOutlined />
            </Space>
        </a>
    </Dropdown>
);
export default AdminMenu;