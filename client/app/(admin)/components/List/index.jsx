"use client"
import React, { useState } from 'react';
import { Avatar, List, Radio, Space } from 'antd';
import Link from 'next/link';



function CRUDList() {
    const data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
        {
            title: 'Ant Design Title 5',
        },
        {
            title: 'Ant Design Title 6',
        },
        {
            title: 'Ant Design Title 7',
        },
        {
            title: 'Ant Design Title 8',
        },
        {
            title: 'Ant Design Title 9',
        },
        {
            title: 'Ant Design Title 10',
        },
        {
            title: 'Ant Design Title 11',
        },
        {
            title: 'Ant Design Title 12',
        },
        {
            title: 'Ant Design Title 13',
        },
        {
            title: 'Ant Design Title 14',
        },
        {
            title: 'Ant Design Title 15',
        },
    ];
    return (
        <List
            pagination={{
                position: "bottom",
                align: "center",
                defaultPageSize: 5
            }}
            dataSource={data}
            renderItem={(item, index) => (
                <List.Item actions={[<Link href={`edit/${index}`} key="list-loadmore-edit">Edit</Link>, <Link href={`delete/${index}`} key="list-loadmore-more">Delete</Link>]}>
                    <List.Item.Meta
                        avatar={
                            <Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />
                        }
                        title={<a href="https://ant.design">{item.title}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                </List.Item>
            )}
        />
    );
}

export default CRUDList