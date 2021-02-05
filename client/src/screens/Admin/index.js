import React from 'react'
import Layout from '../../components/Layout'
import DashboardItem from '../../components/admin/DashboardItem'
const Index = () => {
    return (
        <Layout title="dashboard">
            <ul className="list-unstyled d-flex flex-wrap">
                <DashboardItem backgroundColor="#00a8ff"/>
                <DashboardItem backgroundColor="#00a8ff"/>
                <DashboardItem backgroundColor="#00a8ff"/>
                <DashboardItem backgroundColor="#00a8ff"/>
                <DashboardItem backgroundColor="#00a8ff"/>
                <DashboardItem backgroundColor="#00a8ff"/>
                <DashboardItem backgroundColor="#00a8ff"/>
                <DashboardItem backgroundColor="#00a8ff"/>
            </ul>
            
        </Layout>
    )
}

export default Index
