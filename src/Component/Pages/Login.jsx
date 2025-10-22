import React from "react";
import { Button } from "flowbite-react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {
  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");

  const HendeleLoginBtn = (e) => {
    e.preventDefault();
    if (!Email || !Password) {
      toast.error("Please fill all fields");
    } else {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, Email, Password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.success("Successfully toasted!");
        });
    }
  };
  return (
    <>
      <form onSubmit={HendeleLoginBtn}>
        <Toaster />
        <div className="flex justify-center items-center h-80 bg-[#16476A]">
          <div className="bg-[#3B9797] p-6 rounded-lg shadow-md w-80">
            <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
            <input
              className="border w-full mb-3 p-2 rounded"
              placeholder="Email"
              type="email"
              onChange={(e) => SetEmail(e.target.value)}
            />
            <input
              className="border w-full mb-3 p-2 rounded"
              placeholder="password"
              type="password"
              onChange={(e) => SetPassword(e.target.value)}
            />
            <Button
              className="w-full bg-[#BF092F] text-white py-2 rounded hover:bg-gray-900"
              type="submit">
              Login
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
