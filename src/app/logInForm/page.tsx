"use client";

import { LogInForm } from "@/components/auth";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState(``);

  return (
    <>
      <LogInForm email={email} setEmail={setEmail} />
    </>
  );
}
