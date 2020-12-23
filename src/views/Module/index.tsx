import React, { useState } from 'react'
import {Col, Row, Tabs} from "antd";
import './index.less'

const TabPane = Tabs.TabPane

const Module: React.FC = (props: any) => {

    const callback = (val:any)=>{
        console.log(val)
    }
    return (
        <div className="Module">
            <Row gutter={16}>
                <Col span={12}>
                    <div className="title">
                        <p style={{color:"rgba(0,0,0,.2)",fontSize:'20px',fontWeight:600}}>
                            <span>@</span>
                            <span style={{color:'#fa8c16'}}>activity</span>
                            <span>/</span>
                            <span style={{color:'#1890ff'}}>activity-fat-platform-api</span>
                            <span>@</span>
                            <span style={{color:'#87d068'}}>1.0.0</span>
                        </p>
                    </div>
                </Col>
                <Col span={12}></Col>
            </Row>


            <Row>
                <Row gutter={16}>
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab={
                            <div className="TabPane">
                                <p className="version">1.0.1</p>
                                <ul className="env" style={{display:"flex"}}>
                                    <li>fat</li>
                                    <li>pro</li>
                                </ul>
                            </div>
                        } key="1">
                            Content of Tab Pane 1
                        </TabPane>
                    </Tabs>
                </Row>
            </Row>

        </div>
    )
}

export default Module
