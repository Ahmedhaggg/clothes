import React from 'react'
import Layout from '../../components/AdminLayout'
import DashboardItem from '../../components/admin/DashboardItem'
import { MdShowChart, MdUpdate } from 'react-icons/md'
import { AiOutlineAppstoreAdd, AiOutlineDelete } from 'react-icons/ai'

const AdminProductsScreen = () => {
    return (
        <Layout title="dashboard">
             <ul className="list-unstyled d-flex flex-wrap">
                <DashboardItem backgroundColor="#00a8ff" text="Show Products" link="/admin/products/show">
                    <MdShowChart />
                </DashboardItem>
                <DashboardItem backgroundColor="#00a8ff" text="Add product" link="/admin/products/add">
                    <AiOutlineAppstoreAdd />
                </DashboardItem>
             </ul>
        </Layout>
    )
}

export default AdminProductsScreen;