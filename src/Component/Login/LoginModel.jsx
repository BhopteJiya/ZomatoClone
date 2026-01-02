import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import EmailIcon from '@mui/icons-material/Email';
import { toast } from "react-toastify";

const LoginModal = ({ onClose }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    if (!email) return;

       toast.success("Login successful ", {
    position: "top-right",
  });

    login({
      email,
      name: email.split("@")[0],
    });

    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      
    >
      <div
        className="bg-white p-6 rounded-xl w-96 relative"
        onClick={(e) => e.stopPropagation()} 
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
        >
          <CloseIcon />
        </button>

        <h2 className="text-2xl font-semibold mb-4">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2 rounded mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="bg-red-500 text-white w-full py-2 rounded"
        >
          Continue
        </button>

        <div className="flex-col justify-center" >
       <p className="m-5 text-center" >Or</p>
       < p className="flex border border-gray-400 p-2 rounded-xl justify-center mb-5" > <EmailIcon sx={{color:"red"}} /> Continue with Email</p>
       <p className="flex border border-gray-400 p-2 rounded-xl justify-center mb-5" ><img src="/google.png" alt="" className="h-6 w-6" />Sign in with Google</p>
          
        </div>
        New to zomato ? <span className="text-red-400" >Create Account</span> 
      </div>
    </div>
  );
};

export default LoginModal;
