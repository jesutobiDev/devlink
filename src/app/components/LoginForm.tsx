"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import padlock from "../../images/icons/padlock.svg";
import envelope from "../../images/icons/envelope.svg";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";

interface ErrorMessage {
  email: string;
  password: string;
}

interface FormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const router = useRouter();

  const [emailState, setEmailState] = useState<string>("input-text-empty");
  const [passwordState, setPasswordState] = useState<string>("input-text-empty");
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>({ email: "", password: "" });
  const [formValues, setFormValues] = useState<FormValues>({
    email: "",
    password: ""
  });

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth); 

  const validateEmail = (email: string): string => {
    if (!email) return "Can't be empty";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) ? "" : "Please check again";
  };

  const validatePassword = (password: string): string => {
    if (!password) return "Can't be empty";
    return password.length >= 8 ? "" : "Please check again";
  };

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Validate inputs
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    // Set error messages and states
    if (emailError || passwordError ) {
      setErrorMessage({ email: emailError, password: passwordError });
      setEmailState(emailError ? "input-text-error" : "input-text-active");
      setPasswordState(passwordError ? "input-text-error" : "input-text-active");
      return;
    }

    try {
      const res = await signInWithEmailAndPassword(email, password);
      if (res) {
        sessionStorage.setItem("user", "true");
        setFormValues({
          email: "",
          password: "",
        });
        router.push("/");
      }
    } catch (error) {
      console.error("Failed to sign in", error);
    }
  };

  const clearEmailError = () => {
    setErrorMessage((prev) => ({ ...prev, email: "" }));
    setEmailState("input-text-active");
  };

  const clearPasswordError = () => {
    setErrorMessage((prev) => ({ ...prev, password: "" }));
    setPasswordState("input-text-active");
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col bg-white rounded-xl p-10 gap-10">
      <div className="flex flex-col gap-2">
        <p className="text-[32px] font-bold text-[#333333]">Login</p>
        <p className="text-base text-[#737373]">
        Add your details below to get back into the app
        </p>
      </div>
      <div className="flex flex-col gap-6 w-[396px]">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className={`block text-sm ${errorMessage.email ? "text-dev-red" : "text-[#333333]"}`}
          >
            Email address
          </label>
          <div className={`flex h-12 gap-3 items-center justify-between px-3 ${emailState}`}>
            <Image src={envelope} alt="Envelope Icon" width={16} height={16} />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="e.g. alex@email.com"
              className="h-full outline-none flex-1 placeholder:text-[#333333]/.5"
              onFocus={clearEmailError}
              onBlur={(e) => setEmailState(e.target.value ? "input-text-filled" : "input-text-empty")}
            />
            {errorMessage.email && <p className="text-dev-red text-xs">{errorMessage.email}</p>}
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="password"
            className={`block text-sm ${errorMessage.password ? "text-dev-red" : "text-[#333333]"}`}
          >
            Enter your password
          </label>
          <div className={`flex gap-3 h-12 items-center justify-between px-3 ${passwordState}`}>
            <Image src={padlock} alt="Padlock Icon" width={16} height={16} />
            <input
              id="password"
              type="password"
              name="password"
              placeholder="At least 8 characters"
              className="outline-none flex-1 h-full placeholder:text-[#333333]/.5"
              onFocus={clearPasswordError}
              onBlur={(e) => setPasswordState(e.target.value ? "input-text-filled" : "input-text-empty")}
            />
            {errorMessage.password && <p className="text-dev-red text-xs">{errorMessage.password}</p>}
          </div>
        </div>
        <button
          type="submit"
          className="button-primary-default py-2 px-4 hover:button-primary-active outline-none"
        >
          Login
        </button>
        <p className="text-center text-sm">
          Don{"'"}t have an account?{" "}
          <Link href="/" className="text-dev-purple hover:underline">
            Create account
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
