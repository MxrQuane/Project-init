import {ConfigProvider, Layout} from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'

export function HomeLayout({ sider, content, footer }) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            siderBg: "white",
            bodyBg:"grey",
            footerBg: "black",
          },
        },
      }}
    >
      <Layout style={{height: "100vh"}}>
        <Sider style={{overflowY: "auto"}}>
          {sider || "sider content"}
        </Sider>
        <Layout>
          <Content style={{overflowY: "auto"}}>
            {content || "main content"}
          </Content>
          {footer && (<Footer>
            {footer || "footer content"}
          </Footer>)}
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}