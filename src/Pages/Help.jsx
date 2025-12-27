import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Help = () => {
  const nav=useNavigate();
  return (
    <div className="mx-4 md:mx-10 lg:mx-24 mt-8">
       <div className='p-3' onClick={() => nav("/home")}>
        <ArrowBackIcon sx={{ fontSize: 20, color: "gray" }} />
       </div>

      <div className="bg-white border rounded-lg p-6">
        
        {/* Header */}
        <h1 className="text-2xl font-semibold mb-2">Help & Support</h1>
        <p className="text-gray-500 mb-6">
          We’re here to help you with anything and everything.
        </p>

        {/* Help Sections */}
        <div className="space-y-4">
          
          <div className="border rounded-md p-4 hover:bg-gray-50 cursor-pointer">
            <h2 className="font-medium">Account & Login Issues</h2>
            <p className="text-sm text-gray-500">
              Problems with login, logout or profile.
            </p>
          </div>

          <div className="border rounded-md p-4 hover:bg-gray-50 cursor-pointer">
            <h2 className="font-medium">Orders & Payments</h2>
            <p className="text-sm text-gray-500">
              Issues related to orders, refunds or payments.
            </p>
          </div>

          <div className="border rounded-md p-4 hover:bg-gray-50 cursor-pointer">
            <h2 className="font-medium">Reviews & Photos</h2>
            <p className="text-sm text-gray-500">
              Help with posting or managing reviews and photos.
            </p>
          </div>

          <div className="border rounded-md p-4 hover:bg-gray-50 cursor-pointer">
            <h2 className="font-medium">Privacy & Security</h2>
            <p className="text-sm text-gray-500">
              Learn how we keep your data safe.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-8 text-sm text-gray-500">
          Still need help?  
          <span className="text-red-500 cursor-pointer ml-1">
            Contact Support
          </span>
        </div>

      </div>
    </div>
  );
};

export default Help;
