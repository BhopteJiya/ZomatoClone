import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const ProfileDropdown = ({ isMobile }) => {
  const { logout } = useAuth();
  const nav = useNavigate();

  return (
    <div
      className={`
        bg-white shadow-lg rounded-lg border z-50
        ${  isMobile
      ? "absolute mt-2 border rounded-lg shadow-sm"
      : "absolute top-12 right-0 w-48 shadow-lg"}
     bg-white `}
    >
      <ul className="flex flex-col text-sm">
        <li
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => {
            nav("/profile");
            onClose?.();
          }}
        >
          My Profile
        </li>

        <li
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => {
            nav("/setting");
            onClose?.();
          }}
        >
          Settings
        </li>

        <li
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => {
            nav("/help");
            onClose?.();
          }}
        >
          Help
        </li>

        <li
          className="px-4 py-2 hover:bg-red-50 text-red-500 cursor-pointer"
          onClick={() => {
            logout();
            onClose?.();      
          }}
          
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default ProfileDropdown;
