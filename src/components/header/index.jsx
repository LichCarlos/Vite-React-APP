import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { setDark } from '@/store/slices/theme'
import { Button, Card, Dropdown, Modal } from 'antd'
import {
  ExportOutlined,
  CaretDownOutlined,
  SunOutlined,
  MoonOutlined,
} from '@ant-design/icons'
import { ThemeOutlined } from '@/components/extraIcons'
import ThemeModal from '@/components/themeModal'
import { globalConfig } from '@/globalConfig'
import { useNavigate } from 'react-router-dom'
import logoImg from '@/common/images/logo.png'
import './header.styl'

function Header() {
  // 获取redux派发钩子
  const dispatch = useDispatch()

  // 路由hook
  const navigate = useNavigate()

  // 主题配置
  const theme = useSelector((state) => state.theme)

  // Antd的Modal组件API
  const [modal, contextHolder] = Modal.useModal()

  // 是否显示主题色Modal
  const [showThemeModal, setShowThemeModal] = useState(false)
  // 退出登录
  const logout = () => {
    modal.confirm({
      title: '确定要退出系统么？',
      okText: '退出',
      onOk: () => {
        // 清空localStorage
        window.localStorage.removeItem(globalConfig.SESSION_LOGIN_INFO)
        // 跳转至路径地址/login
        navigate('/login')
      },
    })
  }

  const loginInfo = JSON.parse(
    window.localStorage.getItem(globalConfig.SESSION_LOGIN_INFO)
  )

  const menuItems = [
    {
      label: '退出登录',
      key: 'exit',
      icon: <ExportOutlined />,
      onClick: logout,
    },
  ]

  return (
    <Card className="M-header" bordered={false}>
      <div className="header-wrapper">
        <div className="logo-con">
          <img src={logoImg} alt="" />
          <span className="logo-text">Vite React APP</span>
        </div>
        <div className="header-con">
          {theme.dark ? (
            <Button
              icon={<SunOutlined />}
              shape="circle"
              onClick={() => {
                dispatch(setDark(false))
              }}
            ></Button>
          ) : (
            <Button
              icon={<MoonOutlined />}
              shape="circle"
              onClick={() => {
                dispatch(setDark(true))
              }}
            ></Button>
          )}
          {globalConfig.customColorPrimarys &&
            globalConfig.customColorPrimarys.length > 0 && (
              <Button
                icon={<ThemeOutlined />}
                shape="circle"
                onClick={() => {
                  setShowThemeModal(true)
                }}
              ></Button>
            )}
          <Dropdown menu={{ items: menuItems }}>
            <div className="user-menu">
              <span>
                {loginInfo ? loginInfo.nickname : '未登录'}
              </span>
              <CaretDownOutlined className="arrow" />
            </div>
          </Dropdown>
        </div>
      </div>
      {showThemeModal && (
        <ThemeModal
          onClose={() => {
            setShowThemeModal(false)
          }}
        />
      )}


      {contextHolder}
    </Card>
  )
}

export default Header