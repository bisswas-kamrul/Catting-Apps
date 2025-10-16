import { Button } from "flowbite-react";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SingUp = () => {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ====singUpBTN======
  const handleSignup = (e) => {
    e.preventDefault();
    if (!Name || !email || !password) {
      toast.error("Please fill all fields");
    } else {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error("This email is already in use.");
        });
    }
  };

  // ====singUpBTN======
  return (
    <>
      <div className="flex justify-center items-center h-80 bg-gray-400">
        <form
          onSubmit={handleSignup}
          className="bg-white p-6 rounded-lg shadow-md w-80">
          <Toaster />
          <h2 className="text-xl font-bold mb-4 text-center">Signup</h2>
          <input
            className="border w-full mb-3 p-2 rounded"
            placeholder="Your Name"
            type="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border w-full mb-3 p-2 rounded"
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border w-full mb-3 p-2 rounded"
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            type="submit">
            Signup
          </Button>
        </form>
      </div>
    </>
  );
};

export default SingUp;
