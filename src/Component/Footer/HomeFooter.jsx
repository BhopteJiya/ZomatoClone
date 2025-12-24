import React from "react";

const HomeFooter = () => {
  return (
    <div className="bg-gray-50 w-full flex justify-center">
      <div className="max-w-7xl mx-auto px-8 py-10">

        {/* Logo */}
        <div>
          <img
            src="/zomatologo.png"
            alt="logo"
            className="h-15 mb-15"
          />
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-between text-gray-700 gap-12 font-medium">

          <div>
            <p className="text-black mb-2 ">Eternal</p>
            <p>Zomato</p>
            <p>Blinkit</p>
            <p>District</p>
            <p>Hyperpure</p>
            <p>Feeding India</p>
            <p>Investor</p>
            <p>Relation</p>
          </div>

          <div>
            <p className="text-black mb-2 font-semibold">For Restaurants</p>
            <p>Partner With Us</p>
            <p>Apps For You</p>
          </div>

          <div>
            <p className="text-black mb-2 font-semibold">
              For Delivery <br /> Partners
            </p>
            <p>Partner With Us</p>
            <p>Apps For You</p>
          </div>

          <div>
            <p className="text-black mb-2 font-semibold">Learn More</p>
            <p>Privacy</p>
            <p>Security</p>
            <p>Terms of Services</p>
            <p>Help & Support</p>
            <p>Report a Fraud</p>
            <p>Blog</p>
          </div>

          {/* App Buttons */}
          <div>
            <p className="text-black mb-4 font-semibold">Social Links</p>

            <div className="flex flex-col gap-3">
              <button className="bg-white text-black border border-gray-300 px-3 py-2 rounded-lg flex items-center gap-3 hover:shadow-md transition">
                <img src="/googleplay.png" alt="Google Play" className="h-8 w-8" />
                <div className="text-left leading-tight">
                  <span className="text-xs text-gray-500">Get it on</span>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </button>

              <button className="bg-white text-black border border-gray-300 px-3 py-2 rounded-lg flex items-center gap-3 hover:shadow-md transition">
                <img src="/apple.png" alt="App Store" className="h-8 w-8" />
                <div className="text-left leading-tight">
                  <span className="text-xs text-gray-500">Download on</span>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="my-10 border-gray-300" />

        {/* Bottom text */}
        <p className="text-gray-600 text-sm">
          By continuing past this page, you agree to our Terms of Service, Cookie
          Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners.
          <br />
          <br />
          2008-2025 © Zomato™ Ltd. All rights reserved.
        </p>

      </div>
    </div>
  );
};

export default HomeFooter;
