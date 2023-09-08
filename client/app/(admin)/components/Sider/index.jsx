"use client"
import React, { useState } from 'react'
import Link from 'next/link';


import { UnorderedListOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Sider } = Layout


const items = [
    {
        label: (
            <Link href="/admin/dashboard" rel="noopener noreferrer">
                Dashboard
            </Link>
        ),
        key: 'Dashboard',
        icon: <HomeOutlined />,
    },
    {
        label: (
            <Link href="/admin/posts" rel="noopener noreferrer">
                Posts
            </Link>
        ),
        key: 'Posts',
        icon: <UnorderedListOutlined />,
    },
    {
        label: (
            <Link href="/admin/users" rel="noopener noreferrer">
                User
            </Link>
        ),
        key: 'User',
        icon: <UserOutlined />
    },
];

function AdminSider() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="demo-logo-vertical" />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
    )
}

export default AdminSider