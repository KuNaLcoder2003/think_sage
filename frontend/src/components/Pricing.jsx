import React from 'react';

export default function PricingComponent() {
  return (
    <div className="bg-gray-50 p-8 rounded-3xl shadow-sm max-w-7xl md:w-[80%] lg:w-[90%] xl:w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 md">Simple Pricing</h1>
        <h2 className="text-3xl font-bold text-gray-800">Without Surprises</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Landing Page Card */}
        <div className="bg-white p-6 rounded-xl shadow-md relative flex flex-col">
          <div className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs py-1 px-3 rounded-full transform rotate-12">
            Most Popular
          </div>
          
          {/* Card Header Section - Fixed Height */}
          <div className="h-16 mb-2">
            <h3 className="text-xl font-bold">Landing Page</h3>
          </div>
          
          <p className="text-5xl font-bold text-gray-800 mb-6">$3500+</p>
          
          {/* Features List - With Flex Grow to Push Button Down */}
          <ul className="space-y-3 flex-grow">
            <Feature text="Unlimited Revisions" />
            <Feature text="Copywriting" />
            <Feature text="Single Page" />
            <Feature text="Conversion Optimized" />
            <Feature text="10 Day Delivery" />
            <Feature text="Framer Development" />
            <Feature text="3 design concepts" />
            <Feature text="Priority support" />
          </ul>
          
          {/* Button Section - Fixed Position at Bottom */}
          <div className="mt-auto pt-6">
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Book a Free Intro Call
            </button>
          </div>
        </div>

        {/* App/Product Design Card */}
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col">
          {/* Card Header Section - Fixed Height */}
          <div className="h-16 mb-2">
            <h3 className="text-xl font-bold">App/Product Design</h3>
          </div>
          
          <p className="text-5xl font-bold text-gray-800 mb-6">$2000+</p>
          
          {/* Features List - With Flex Grow to Push Button Down */}
          <ul className="space-y-3 flex-grow">
            <Feature text="Unlimited Pages" />
            <Feature text="Unlimited Revisions" />
            <Feature text="Conversion Optimized" />
            <Feature text="7 Day Delivery" />
            <Feature text="Priority support" />
          </ul>
          
          {/* Button Section - Fixed Position at Bottom */}
          <div className="mt-auto pt-6">
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Book a Free Intro Call
            </button>
          </div>
        </div>

        {/* Logo Design Card */}
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col">
          {/* Card Header Section - Fixed Height */}
          <div className="h-16 mb-2">
            {/* <div className="flex items-center justify-end mb-1">
              <span className="text-sm text-gray-600 mr-2">Visual Identity</span>
              <div className="w-12 h-6 bg-indigo-200 rounded-full flex items-center p-1">
                <div className="w-4 h-4 bg-indigo-600 rounded-full ml-auto"></div>
              </div>
            </div> */}
            <h3 className="text-xl font-bold">Logo Design</h3>
          </div>
          
          <p className="text-5xl font-bold text-gray-800 mb-6">$498</p>
          
          {/* Features List - With Flex Grow to Push Button Down */}
          <ul className="space-y-3 flex-grow">
            <Feature text="Stand-out Logo" />
            <Feature text="3 Revisions" />
            <Feature text="Source Files" />
            <Feature text="5 Day Delivery" />
            <Feature text="Priority support" />
          </ul>
          
          {/* Button Section - Fixed Position at Bottom */}
          <div className="mt-auto pt-6">
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Purchase Logo Design
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ text }) {
  return (
    <li className="flex items-center">
      <div className="bg-indigo-600 rounded-full w-5 h-5 flex items-center justify-center mr-3">
        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
        </svg>
      </div>
      <span className="text-gray-700">{text}</span>
    </li>
  );
}