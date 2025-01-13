"use client";

import { Button, Layout, Typography, theme } from 'antd';
const { Content, Footer } = Layout;
const { Title} = Typography;
import { FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa";


const ContactPage = () => {
    // const {
    //     token: { colorBgContainer, borderRadiusLG },
    //   } = theme.useToken();

    return (
        <Layout>
           <Content className="p-12">
            <Title level={2}>let's connect!</Title> 
            <Content className="p-12 justify-end">
                <Button type="link" href="https://www.linkedin.com/in/cindy-shih-ting-huang/"><FaLinkedin size={50}/></Button>
                <Button type="link" href="https://github.com/cindyellow"><FaGithub size={50}/></Button>
                <Button type="link" href="https://open.spotify.com/user/cindy200169?si=6b857763e02b4955"><FaSpotify size={50}/>
                </Button>
            </Content>    
           </Content>
           <Footer style={{ textAlign: 'center' }}>
                Created using React.
            </Footer>
        </Layout>
    )
}

export default ContactPage;