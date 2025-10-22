"use client";

import { ResetPassword, VerifyEmail } from "@/components/auth";
import { useState } from "react";

export default function Page() {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState(``);
  const StepComponents = [ResetPassword, VerifyEmail][step];
  const HandleChangeStep = () => {
    setStep((prev) => prev + 1);
  };
  return (
    <>
      <StepComponents HandleChangeStep={HandleChangeStep} setEmail={setEmail} />
    </>
  );
}
