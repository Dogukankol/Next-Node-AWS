import React from 'react'
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link';




function AdminBreadcrumb({props}) {
    const pathname = usePathname().split("/");
    const breadcrumbs = []
    pathname.map((title, index) => {
        breadcrumbs.push({
            title: `${title}`,
            link: `/${pathname.slice(0, index + 1).join('/')}`,
        })
    });
    return (
        <>
        <Breadcrumb style={{ margin: '16px', textTransform: "capitalize" }}>
            <Breadcrumb.Item><HomeOutlined /></Breadcrumb.Item>

            {
                breadcrumbs.map((item, key) => (
                    key != 0 &&  <Breadcrumb.Item key={key} >
                                    <Link href={`${item.link}`.substring(1)}>{item.title == "admin" ? "Control Panel" : item.title}</Link>
                                </Breadcrumb.Item>
                ))
            }
        </Breadcrumb>
        </>
    )
    
}

export default AdminBreadcrumb