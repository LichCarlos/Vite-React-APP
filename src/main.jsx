import ReactDOM from 'react-dom/client'
import Routers from '@/router'
import { ConfigProvider } from 'antd'
import { store } from '@/store'
import { Provider } from 'react-redux'
// 引入Ant Design中文语言包
import zhCN from 'antd/locale/zh_CN'
// 全局样式
import '@/common/styles/frame.styl'
// mock.js模拟数据
import './mock'
import { detectOS } from '@/common/js/commonLib'

// 判断操作系统
document.body.setAttribute('os', detectOS())
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <Routers />
    </ConfigProvider>
  </Provider>
)
