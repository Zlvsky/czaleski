import React from 'react';
import BigContainer from '../layout/BigContainer';

const pricingData = [
    {
        title: 'Custom Coded Website',
        description: 'Website written in Next.js using TailwindCSS'
    }
]

function Pricing() {
    return (
      <BigContainer>
        <h2 className="text-center text-4xl text-white">Let&apos;s get to work</h2>
      </BigContainer>
    )
}

export default Pricing;