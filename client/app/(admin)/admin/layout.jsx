"use client"
import React from 'react';
import { Layout } from 'antd';
import NextTopLoader from 'nextjs-toploader';
require('dotenv').config()

import { AdminSider, AdminHeader, AdminBreadcrumb, Loading } from '../components/';
import { StoreProvider } from "@/stores/store-provider";
import './layout.scss'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  const { Content, Footer } = Layout;

  return (
    <html lang="en">
      <body className="control-panel">
        <NextTopLoader />

        <Loading />
        <StoreProvider>
          <Layout style={{ minHeight: '100vh' }}>
            <AdminSider />
            <Layout>
              <AdminHeader style={{ padding: 0 }} />
              <AdminBreadcrumb />
              <Content style={{ margin: '0 16px' }}>
                {children}
              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
          </Layout>
        </StoreProvider>
      </body>
    </html>
  )
}
