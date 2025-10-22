"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
type AcountProps = {
  gmail: string;
};
export function Account({ gmail }: AcountProps) {
  const [email, setEmail] = useState("");
  const emaiCheck = () => {
    if (gmail !== "") {
      setEmail(gmail);
    } else {
      setEmail("Test");
    }
  };
  useEffect(() => {
    emaiCheck();
  }, []);

  return (
    <div className=" flex flex-col justify-center items-center rounded-md w-47 h-25 bg-background text-5 font-bold text-foreground">
      {email}@gmail.com
      <Badge
        className="text-4 text-secondary-foreground bg-secondary py-2 px-3 "
        asChild
      >
        <Link href="/signUpForm/">Sign out</Link>
      </Badge>
    </div>
  );
}
