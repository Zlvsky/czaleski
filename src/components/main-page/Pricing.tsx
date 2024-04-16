import React from 'react';
import BigContainer from '../layout/BigContainer';
import SectionHeader from '../common/SectionHeader';

const pricingData = [
    {
      title: 'Custom Coded Website',
      description: 'Website written in Next.js using TailwindCSS with any features you need.',
      price: 'starts at $700',
    },
    {
      title: 'WordPress Website',
      description: 'Website created using WordPress and Elementor',
      price: 'starts at $400',
    },
    {
      title: 'Web App',
      description: 'Web application written in React or Next.js',
      price: 'starts at $1500',
    },
    {
      title: 'Outsourcing',
      description: 'Need help with your project? I can help you with that too',
      price: '30$/hour',
    },
]

function Pricing() {
    return (
      <BigContainer>
        <div className="mt-20 md:mt-28"></div>
        <SectionHeader title="Ready to work with me?" subtitle={'Pricing'} />
        <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-8 md:grid-cols-2 md:px-3 ">
          {pricingData.map((item, index) => (
            <div key={'pricing_' + index} className="flex flex-col items-start gap-2 rounded-3xl border border-darkborder bg-dark26/60 p-4 md:p-10">
              <h4 className="text-2xl font-medium tracking-tighter text-white">{item.title}</h4>
              <p className="mb-4 text-base text-white/60">{item.description}</p>
              <span className="text-lg font-medium text-white">{item.price}</span>
            </div>
          ))}
        </div>
      </BigContainer>
    )
}

export default Pricing;