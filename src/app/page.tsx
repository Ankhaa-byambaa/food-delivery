"use client";
import { EmailSignUpForm } from "@/components/auth/EmailSignUpForm";
import { PasswordSignUpForm } from "@/components/auth/PasswordSignUpForm";
import { LogInForm } from "@/components/auth/LogInForm";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState(0);
  const StepComponents = [];
  return (
    <>
      <LogInForm />
    </>
  );
}
