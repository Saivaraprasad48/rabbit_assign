import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const getSubmit = (e) => {
    e.preventDefault();
    if (username === "" || email === "" || password === "") {
      alert("Please enter all values to proceed");
    } else if (email === "sai@gmail.com" && password === "sai@123") {
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      navigate("/home");
    } else {
      alert("Invalid username or email");
    }
  };

  return (
    <div className="bg-gray-300 h-[100vh] flex flex-row justify-center items-center">
      <div className="bg-gray-100  min-h-[400px] w-[350px] flex flex-col justify-start items-center rounded py-4 gap-2">
        <h1 className="text-[22px] text-[#000]">
          Please register to move ahead
        </h1>
        <form className="flex flex-col gap-2 pt-4" onSubmit={getSubmit}>
          <label htmlFor="username"> Username </label>
          <input
            value={username}
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 border border-blue-200 border-solid"
            id="username"
          />
          <br />
          <label htmlFor="email"> Email </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-blue-200 border-solid"
            id="email"
          />
          <br />
          <label htmlFor="password"> Password </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border border-blue-200 border-solid"
            id="password"
          />
          <br />
          <button className="bg-blue-300 text-[16px] rounded-full p-2">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
