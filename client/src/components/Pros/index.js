import React from 'react'
import styled from 'styled-components';
import SectionTitle from '../Ui/sectionTitle.js'

const ProsSection = styled.div`

`
const Pros = () => {
    return (
        <ProsSection>
            <SectionTitle text="why us"/>
            <div>
                <span className="text-blue text-capitalize">free delvery</span>
                <img src="/images/pros/delvery.png"/>   
            </div>
            <div>
                <span className="text-blue text-capitalize">low price</span>
                <img src="/images/pros/low-price.png"/>
            </div>
            <div>
                <span className="text-blue text-capitalize">speed delevry</span>
                <img src="/images/pros/timer.png"/>
            </div>
        </ProsSection>
    )
}

export default Pros;
