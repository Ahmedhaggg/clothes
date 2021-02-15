import React from 'react'
import Layout from '../../components/AdminLayout'
import DashboardItem from '../../components/admin/DashboardItem'


const AdminIndex = () => {
    return (
        <Layout>
            <ul className="list-unstyled d-flex flex-wrap">
                <DashboardItem backgroundColor="#00a8ff" text="users"/>
                <DashboardItem backgroundColor="#00a8ff" text="products"/>
                <DashboardItem backgroundColor="#00a8ff" text="orders"/>
                <DashboardItem backgroundColor="#00a8ff" text="products"/>
            </ul>
        </Layout>
    )
}

export default AdminIndex
