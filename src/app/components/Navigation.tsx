"use client";

import Link from "next/link";
import { Layout, theme, Menu } from 'antd';
const {Header} = Layout;


const Navigation = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    return(
        <Header style={{ display: 'flex', alignItems: 'center', background:colorBgContainer }}>
            <Link href="/" className="text-xl font-bold flex-1 w-40">cindy's myspace</Link>
            <Menu theme="dark"
            mode="horizontal"
            className="flex-1 w-80 justify-end text-lg">
                <Menu.Item key="projects">
                    <Link href="/projects">projects</Link>
                </Menu.Item>
                <Menu.Item key="noms">
                    <Link href="/noms">noms</Link>
                </Menu.Item>
                <Menu.Item key="connect">
                    <Link href="/connect">connect</Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
};


export default Navigation;