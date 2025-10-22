import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Account } from "./Account";
export function Header() {
  return (
    <>
      <div className="w-full h-48 bg-primary flex justify-between items-center px-22">
        <img className="h-11 " src={"Logo Container.png"} />

        <div className="bg-background rounded-full w-fit  h-9 flex items-center  gap-1 py-2 px-3 ">
          <Link href={"./"}>
            <img className="h-4" src="Location Icon.png" />
            <p className="text-[12px] text-red-500 text-nowrap">
              Delivery address
            </p>
          </Link>
          <Link href={"./"}>
            <p className="text-[12px] flex text-muted-foreground">
              Add locaion
            </p>
            <p className="text-5 text-muted-foreground"> ›</p>
          </Link>
        </div>

        <Account gmail="" />
      </div>
    </>
  );
}
