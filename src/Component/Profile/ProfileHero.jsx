import React from "react";
import EditSquareIcon from "@mui/icons-material/EditSquare";
import { useAuth } from "../../Context/AuthContext";


const ProfileHero = () => {
   const { user } = useAuth();

  return (
    <div className="relative mx-4 md:mx-10 lg:mx-24 h-[260px] rounded-xl overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src="/coll6.avif"
        alt="cover"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK OVERLAY (optional but recommended) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT ON TOP */}
      <div className="relative z-10 h-full flex items-center p-6 gap-6 text-white ">

        {/* PROFILE IMAGE */}
       
        <img
          src="/Profileicon.avif"
          alt="profile"
          className="h-24 w-24 rounded-full border-4 border-white object-cover"
        />

        {/* USER INFO */}
        <div className="flex justify-between items-center w-full">

  {/* LEFT: NAME */}
  <div>
    <h2 className="text-2xl font-semibold">  {user?.name || "Guest"}</h2>
  </div>


  {/* RIGHT: BUTTON + STATS */}
  <div className="flex flex-col items-end gap-3">

    <button className="flex items-center gap-1 bg-red-500 px-3 py-1.5 rounded-md text-sm">
      <EditSquareIcon sx={{ fontSize: 14 }} />
      Edit Profile
    </button>

    <div className="flex gap-6 text-sm text-gray-200">
      <p className="text-xl" >0 Reviews</p>
       <div className="h-16 w-px bg-gray-300 mx-6" />

      <p className="text-xl" >0 Photos</p>
       <div className="h-16 w-px bg-gray-300 mx-6" />

      <p className="text-xl" >0 Followers</p>
    </div>

  </div>
</div>
</div>
    </div>
  );
};

export default ProfileHero;
