import { Card } from 'antd'
import PageHeaderWrapper from '@/components/pageHeaderWrapper'
import './users.styl'

function Users() {
  return (
    <>
      <PageHeaderWrapper title="用户管理" subtitle="(副标题)" />
      <section className="G-main P-users">
        <Card>Users页面</Card>
      </section>
    </>
  )
}

export default Users
