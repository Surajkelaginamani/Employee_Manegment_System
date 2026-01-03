import React, { useState } from "react";

const Login = ({ Handlelogin }) => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
    Handlelogin(email, pass);
    setemail("");
    setpass("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white border rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-center mb-2">
          Sign in to your account
        </h2>

        <form onSubmit={submithandler} className="space-y-5">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              required
              value={pass}
              onChange={(e) => setpass(e.target.value)}
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          <button className="w-full bg-blue-600 text-white py-2 rounded">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
