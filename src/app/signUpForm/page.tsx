"use client";

import { EmailSignUpForm, PasswordSignUpForm } from "@/components/auth";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(0);
  const StepComponents = [EmailSignUpForm, PasswordSignUpForm][step];
  const HandleChangeStep = () => {
    setStep((prev) => prev + 1);
  };
  const [email, setEmail] = useState("");
  // const renderStep = () => {
  //   const s = StepComponents[step];
  //   return s;
  // };
  return (
    <>
      <StepComponents
        email={email}
        setEmail={setEmail}
        HandleChangeStep={HandleChangeStep}
      />
    </>
  );
}
