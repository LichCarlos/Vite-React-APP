import { useState } from 'react'
import { Layout, Menu, theme } from 'antd'
import { useSelector } from 'react-redux'
import { globalConfig } from '@/globalConfig'

import { useNavigate, useLocation } from 'react-router-dom'
import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons'
import './sider.styl'

const AntdSider = Layout.Sider
const { useToken } = theme
function Sider() {
  // 获取store中的主题色配置
  const globalTheme = useSelector((state) => state.theme)

  // Antd的主题色hook
  const { token } = useToken()


  // 当前路由地址
  const location = useLocation()

  // 路由hook
  const navigate = useNavigate()

  // 左侧导航的开合状态
  const [collapsed, setCollapsed] = useState(false)
  // 判断sider主题色
  let siderTheme = 'dark'
  if (globalConfig.siderTheme === 'light') {
    siderTheme = 'light'
  } else if (globalConfig.siderTheme === 'theme') {
    globalTheme.dark ? (siderTheme = 'dark') : (siderTheme = 'light')
  }


  // 左侧导航列表
  const items = [
    {
      label: '首页',
      key: '/home',
      icon: <HomeOutlined />,
      children: null,
      type: null,
      onClick: () => {
        // 跳转至路径地址/home
        navigate('/home')
      },
    },
    {
      label: '用户管理',
      key: '/users',
      icon: <UserOutlined />,
      children: null,
      type: null,
      onClick: () => {
        // 跳转至路径地址/users
        navigate('/users')
      },
    },
  ]

  // 切换左侧导航开合状态
  const onCollapse = () => {
    setCollapsed(!collapsed)
  }

  // 左侧导航展开时的宽度
  const fullWidth = 200
  // 左侧导航收起时的宽度
  const collapsedWidth = 49

  return (
    <AntdSider
      className="M-sider"
      trigger={null}
      collapsible
      collapsed={collapsed}
      collapsedWidth={collapsedWidth}
      width={fullWidth}
      theme={siderTheme}
      style={{
        backgroundColor: token.colorBgContainer,
        borderColor: token.colorBorderSecondary,
      }}


    >
      <div className="sider-main">
        <Menu
          mode="inline"
          selectedKeys={location.pathname}
          items={items}
          className="sider-menu"
        ></Menu>
        <div className="sider-footer" onClick={onCollapse} style={{
          color: token.colorTextBase,
          borderTopColor: token.colorBorder,
        }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
      </div>
    </AntdSider>
  )
}

export default Sider
