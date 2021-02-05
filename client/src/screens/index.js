import React from 'react'
import SubNavbar from '../components/SubNavbar'
import Layout from '../components/Layout'
import LandingPage from '../components/LandingPage'
import Pros from '../components/Pros'
const Index = () => {

    return (
        
        <div>
            <SubNavbar />
            <Layout>
                < LandingPage />
                <Pros />
            </Layout>
        </div>
    )
}

export default Index
