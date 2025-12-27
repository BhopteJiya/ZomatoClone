import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const ProfileDropdown = () => {
  const { logout } = useAuth();
  const nav=useNavigate();

  return (
    <div
      className="absolute top-12 right-0 w-48 bg-white shadow-lg rounded-lg border z-50"
    >
      <ul className="flex flex-col text-sm">
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
        onClick={()=>nav("/profile")}
        >
          My Profile
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={()=>nav("/setting")}
        >
          Settings
        </li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={()=>nav("/help")}
        >
          Help
        </li>
        <li
          className="px-4 py-2 hover:bg-red-50 text-red-500 cursor-pointer"
          onClick={() => {
            logout();
            onClose();
          }}
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
