import { Card } from 'antd'
import PageHeaderWrapper from '@/components/pageHeaderWrapper'
import './home.styl'

function Home() {
  return (
    <>
      <PageHeaderWrapper title="首页" subtitle="(副标题)" />
      <section className="G-main P-home">
        <Card title="主题换肤说明">
          <p>
            1. 管理后台中，每一个面板模块，使用Antd的&lt;Card
            /&gt;组件进行作为最外层，以便适用主题换肤。
          </p>
          <p>
            2.
            任何自行写的样式颜色，都不会换肤。如需换肤，使用Antd的useToken获取当前主题token中对应的颜色值进行换肤。
          </p>
        </Card>
        <Card title="版权声明">
          <p>公众号：卧梅又闻花</p>
          <p>掘金：Mr_兔子先生</p>
          <p>知乎：兔子先生</p>
        </Card>
      </section>
    </>
  )
}

export default Home
