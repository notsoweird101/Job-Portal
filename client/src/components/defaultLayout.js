import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  HomeOutlined,
  FileDoneOutlined,
  ExportOutlined,
  PoweroffOutlined  
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import Filter from './Filter';
const { Header, Sider, Content } = Layout;




function DefaultLayout(props) {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  function logout() {
    localStorage.removeItem('user')
    window.location.reload();
  }
  const user=JSON.parse(localStorage.getItem('user'))
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{ position: 'sticky', overflow: 'auto', height: '100%', top: 0 }}>
        <div className="demo-logo-vertical">
          {collapsed ? (<h1>OHP</h1>) : <h1>Orion HirePulse</h1>}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[window.location.pathname]}
          items={[
            {
              key: '/',
              icon: <HomeOutlined />,
              label: <Link to="/">Home</Link>,
            },
            {
              key: '/profile',
              icon: <UserOutlined />,
              label: <Link to="/profile">Profile</Link>,
            },
            {
              key: '/appliedjobs',
              icon: <FileDoneOutlined />,
              label: <Link to='/appliedjobs'>Applied Jobs</Link>,
            },
            {
              key: '/postjob',
              icon: <ExportOutlined />,
              label: <Link to='/postjob'>Post Jobs</Link>,
            },
            {
              key: '/posted',
              icon: <UploadOutlined />,
              label: <Link to='/posted'>Posted Jobs</Link>
            },
            {
              key: '/logout',
              icon: <PoweroffOutlined />,
              label: <Link onClick={logout}>Logout</Link>
            },
          ]}
        />
      </Sider>
      <Layout className='site-layout'>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            position: 'sticky', overflow: 'auto', top: 0, zIndex: 9999
          }}
        >
          <div className='flex justify-content-between'>
            <div>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                  width: 64,
                  height: 64,
                }}

              />
            </div>
            <div>
                <Filter/>            </div>
            <div>
                <h5 className='mr-2'><b>{user.username}</b></h5>
            </div>
          </div>

        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default DefaultLayout;