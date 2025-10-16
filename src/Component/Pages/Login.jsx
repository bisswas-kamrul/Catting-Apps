import React from "react";
import { Button } from "flowbite-react";
const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center h-80 bg-gray-400">
        <div className="bg-white p-6 rounded-lg shadow-md w-80">
          <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
          <input
            className="border w-full mb-3 p-2 rounded"
            placeholder="Email"
            type="email"
          />
          <input
            className="border w-full mb-3 p-2 rounded"
            placeholder="password"
            type="password"
          />
          <Button
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            type="submit">
           Login
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;
