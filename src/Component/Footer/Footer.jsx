import React from 'react'

const Footer = () => {
  return (
    <div className="bg-black w-full flex justify-center">

      
      <div className="max-w-7xl mx-auto px-8 py-10">

       
        <div>
          <img
            src="/logo.avif"
            alt="logo"
            className="h-8 mb-8"
          />
        </div>

        
        <div className="flex flex-wrap text-white gap-12 font-semibold">

          <div className="text-gray-400">
            <p className="text-white mb-2">Eternal</p>
            <p>Zomato</p>
            <p>Blinkit</p>
            <p>District</p>
            <p>Hyperpure</p>
            <p>Feeding India</p>
            <p>Investor</p>
            <p>Relation</p>
          </div>

          <div className="text-gray-400">
            <p className="text-white mb-2">For Restaurants</p>
            <p>Partner With Us</p>
            <p>Apps For You</p>
          </div>

          <div className="text-gray-400">
            <p className="text-white mb-2">
              For Delivery <br /> Partners
            </p>
            <p>Partner With Us</p>
            <p>Apps For You</p>
          </div>

          <div className="text-gray-400">
            <p className="text-white mb-2">Learn More</p>
            <p>Privacy</p>
            <p>Security</p>
            <p>Terms of Services</p>
            <p>Help & Support</p>
            <p>Report a Fraud</p>
            <p>Blog</p>
          </div>

          <div className="text-gray-400">
            <p className="text-white mb-4">Social Links</p>

            <div className="flex flex-col gap-3">
              <button className="bg-black text-white border border-gray-600 px-3 py-2 rounded-lg flex items-center gap-3">
                <img src="/googleplay.png" alt="Google Play" className="h-8 w-8" />
                <div className="text-left leading-tight">
                  <span className="text-xs text-gray-300">Get it on</span>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </button>

              <button className="bg-black text-white border border-gray-600 px-3 py-2 rounded-lg flex items-center gap-3">
                <img src="/apple.png" alt="App Store" className="h-8 w-8" />
                <div className="text-left leading-tight">
                  <span className="text-xs text-gray-300">Download on</span>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </button>
            </div>
          </div>

        </div>

        <hr className='my-10 w-full h-2 text-gray-400' />
        <p className='text-gray-600 text-sm' >By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective <br /> owners <br />
2008-2025 © Zomato™ Ltd. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
