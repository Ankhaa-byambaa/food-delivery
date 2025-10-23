import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div>
        <Header foodDetail={false} />
        {children}
        <Footer foodDetail={false} />
      </div>
    </>
  );
}
