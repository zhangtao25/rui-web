import React, { useState } from 'react'
import { renderRoutes } from 'react-router-config'
import { createHashHistory } from 'history'
import LayoutHeader from './LayoutHeader'
import {Breadcrumb, Layout, Menu} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import './LayoutContainer.less'

const LayoutContainer: React.FC = (props: any) => {
    const history = createHashHistory()
    const handleClick = (val: any) => {
        console.log(val, 'val')
        history.push(`/main/${val}`)
    }
    return (
        <>
            <div>
                {/*<LayoutHeader />*/}



                <Layout className="layout">
                    <Header>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                        >
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-content">
                            {renderRoutes(props.route.routes)}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>

            </div>
        </>
    )
}

export default LayoutContainer
