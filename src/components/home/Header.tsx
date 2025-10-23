import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Account } from "./Account";
type HeaderProps = {
  foodDetail: boolean;
};
export function Header({ foodDetail }: HeaderProps) {
  return (
    <>
      {foodDetail ? (
        <div className="w-fullfitt bg-primary flex justify-between items-center px-5 py-5">
          <img className="h-11 " src={"Logo Container.png"} />
          <div className="flex items-center gap-3">
            <div className="bg-background rounded-full w-fit  h-9 flex items-center  gap-1 py-2 px-3 ">
              <Link href={"./"}>
                <div className="flex justify-center items-center">
                  <img className="h-4" src="Location Icon.png" />
                  <p className="text-[12px] text-red-500 text-nowrap">
                    Delivery address{foodDetail}
                  </p>
                </div>
              </Link>
              <Link href={"./"}>
                <div className="flex justify-center items-center">
                  <p className="text-[12px] flex text-muted-foreground">
                    Add locaion
                  </p>
                  <p className="text-5 text-muted-foreground"> ›</p>
                </div>
              </Link>
            </div>
            <div className="flex gap-3 items-center justify-center">
              <a href="#">
                <img src="/Icon Button.png" />
              </a>
              <a href="#">
                <img src="Icon Button (1).png" />
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-48 bg-primary flex justify-between items-center px-20 py-20">
          <img className="h-11 " src={"Logo Container.png"} />
          <div className="flex items-center">
            <div className="bg-background rounded-full w-fit  h-9 flex items-center  gap-1 py-2 px-3 ">
              <Link href={"./"}>
                <div className="flex justify-center items-center">
                  <img className="h-4" src="Location Icon.png" />
                  <p className="text-[12px] text-red-500 text-nowrap">
                    Delivery address
                  </p>
                </div>
              </Link>
              <Link href={"./"}>
                <div className="flex justify-center items-center">
                  <p className="text-[12px] flex text-muted-foreground">
                    Add locaion
                  </p>
                  <p className="text-5 text-muted-foreground"> ›</p>
                </div>
              </Link>
            </div>

            <Account gmail="" />
          </div>
        </div>
      )}
    </>
  );
}
