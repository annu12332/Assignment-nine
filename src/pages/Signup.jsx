import React, { useState } from "react";
import { useAuth } from "../AuthProvider";

const Signup = () => {
  const { registerWithEmailPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault(); 
    setError("");

    try {
      const userCredential = await registerWithEmailPassword(email, password);
      console.log("User created:", userCredential.user);
      alert("Account created successfully!");
     
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <div className="signup-container ">
      <h2 className="text-3xl mb-2 mt-3  font-bold text-center text-blue-700">Signup</h2>
      <form onSubmit={handleSignup} className="flex flex-col items-center text-xl ">
        <input className="border-2 text-center mt-2 mb-3 rounded-full"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input className="border-2 text-center mt-2 mb-3 rounded-full"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="bg-blue-700 text-white px-10 py-2 hover:bg-blue-900 rounded-full mb-4" type="submit">Sign Up</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Signup;
