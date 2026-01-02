import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { toast } from "react-toastify";
import { registerUser, loginUser } from "../../api/auth";
import { useAuth } from "../../Context/AuthContext";
import EmailIcon from '@mui/icons-material/Email';


const SignupModal = ({ onClose }) => {
  const { login } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!name || !email || !password) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      // 1️⃣ Register user
      await registerUser({ name, email, password });

      // 2️⃣ Auto login after signup (UX like Zomato)
      const res = await loginUser({ email, password });

      login(res.data.user, res.data.token);

      toast.success("Account created successfully 🎉");
      onClose();

    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-96 relative">

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500"
        >
          <CloseIcon />
        </button>

        <h2 className="text-2xl font-semibold mb-4">Sign up</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="border w-full p-2 rounded mb-3"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2 rounded mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 rounded mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="bg-red-500 text-white w-full py-2 rounded"
        >
          Create Account
        </button>
         <div className="flex-col justify-center" >
          <p className="m-5 text-center" >Or</p>
          < p className="flex border border-gray-400 p-2 rounded-xl justify-center mb-5" > <EmailIcon sx={{ color: "red" }} /> Continue with Email</p>
          <p className="flex border border-gray-400 p-2 rounded-xl justify-center mb-5" ><img src="/google.png" alt="" className="h-6 w-6" />Sign in with Google</p>

        </div>
      </div>
    </div>
  );
};

export default SignupModal;
