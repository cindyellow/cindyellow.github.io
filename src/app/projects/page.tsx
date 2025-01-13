"use client";

import { Typography, Layout, theme } from 'antd';
import { Col, Row } from 'antd';
const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;


const ProjectPage = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();

    return (
        <Layout>
           <Content className="px-20 py-10 flex-1">
           <Title level={2}>Projects</Title>
           <Row gutter={[24, 24]}>
                <Col span={8} className="text-center py-4 px-8 flex-1">
                <Title level={4}>Temporal Multi-Modal Modelling</Title>
                <Paragraph className="text-justify"> {"To address the challenge \
                of predictive modeling using the limited information at the \
                beginning of a patient stay, we propose a multimodal system to \
                fuse both textual notes and tabular events captured in \
                electronic health records."}
                </Paragraph>
                </Col>
                <Col span={8} className="text-center py-4 px-8 flex-1">
                <Title level={4}>Acute Kidney Injury (AKI) Detection System</Title>
                <Paragraph className="text-justify"> {"Deployed with teammates a \
                machine learning system on Kubernetes monitored \
                using Prometheus that predicts and sends page requests \
                for AKI based on patients\' blood test results received \
                from a server in real-time, maintaining low latency \
                of \<3s."}
                </Paragraph>
                </Col>
                <Col span={8} className="text-center py-4 px-8 flex-1">
                <Title level={4}>Brain Graph Super-Resolution Net</Title>
                <Paragraph className="text-justify"> {"Augmented Adversarial \
                Graph Neural Network with a Graph Convolutional-based discriminator \
                 and generator stabilized using GraphNorm to super-resolute \
                 low-resolution brain connectivity graphs."}
                </Paragraph>
                </Col>
            </Row>
            <Row gutter={[24, 24]}>
                <Col span={8} className="text-center py-4 px-8">
                <Title level={4}>Estimating Pollutant Exposure Related to Drought and Wildfire</Title>
                <Paragraph className="text-justify"> {"Supervised by Professor \
                Meredith Franklin and funded by the DoSS Summer Undergraduate \
                Research Award. Automated accessing, preprocessing, and \
                wrangling of large spatiotemporal datasets on fire and smoke \
                detection (from 2000-2022) for linkage to PM2.5 records."}
                </Paragraph>
                </Col>
                <Col span={8} className="text-center py-4 px-8">
                <Title level={4}>Domain Adaptation for Low-Resource Languages</Title>
                <Paragraph className="text-justify"> {"Experimented with two-stage,\
                 mixed-domain fine-tuning, and bitext denoising for pre-trained \
                 multilingual Seq2seq models (i.e. mBART) on high-performance \
                 computing systems to compare machine translation performance."}
                </Paragraph>
                </Col>
                <Col span={8} className="text-center py-4 px-8">
                <Title level={4}>Restaurants Performance During COVID-19: A Yelp Analysis</Title>
                <Paragraph className="text-justify"> {"Inspected 6,990,000+ reviews \
                of 150,000+ businesses retrieved from Yelp API and investigated \
                COVID-19's impact on restaurant ratings via text mining and \
                Generalized Linear Mixed Model."}
                </Paragraph>
                </Col>
            </Row>
           </Content>
           <Footer style={{ textAlign: 'center' }}>
                Created using React.
            </Footer>
        </Layout>
    )
}

export default ProjectPage;