import { Suspense, lazy } from 'react'
import { createHashRouter, Navigate } from 'react-router-dom'
import { Spin } from 'antd'
import Login from '@/pages/login'
import Home from '@/pages/home'
import Users from '@/pages/users'

// 全局路由
function globalRoute() {
  // 二级路由框架页面采用懒加载方式
  const Entry = lazy(() => import('@/pages/entry'))

  return createHashRouter([
    {
      // 精确匹配"/login"，跳转Login页面
      path: '/login',
      element: <Login />,
    },
    {
      // 未匹配"/login"，则进入到Entry页面
      path: '/',
      element: (
        // 懒加载过程中先使用Spin组件占位
        <Suspense fallback={<Spin />}>
          <Entry />
        </Suspense>
      ),
      // 定义Entry二级路由
      children: [
        {
          // 精确匹配"/home"，跳转Home页面
          path: '/home',
          element: <Home />,
        },
        {
          // 精确匹配"/users"，跳转Home页面
          path: '/users',
          element: <Users />,
        },
        {
          // 如果URL没有"#路由"，跳转Home页面
          path: '/',
          element: <Navigate to="/home" />,
        },
        {
          // 未匹配，跳转Login页面
          path: '*',
          element: <Navigate to="/login" />,
        },
      ],
    },
  ])
}

const globalRouter = globalRoute()

export default globalRouter
