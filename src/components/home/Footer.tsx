import { Separator } from "@/components/ui/separator";

type FooterProps = {
  foodDetail: boolean;
};
export function Footer({ foodDetail }: FooterProps) {
  return (
    <>
      <div className="h-180 w-full bg-primary">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className=" flex py-7 px-[98px] bg-red-500 h-[92px] font-bold text-white text-[30px] ">
          <p className=" "> Fresh fast delivered</p>
        </div>
        <img className="w-22" src={"Logo Container (1).png"} />
        <div className="flex flex-col gap-4 ">
          <p className="text-[16px] text-muted-foreground">NOMNOM</p>
          <p className="text-[16px] text-white">Home</p>
          <p className="text-[16px] text-white">Contact us</p>
          <p className="text-[16px] text-white">Delivery Zone</p>
        </div>
        <div className="flex gap-15">
          <div className="flex flex-col gap-4  ">
            <p className="text-[16px] text-white">Appetizers</p>
            <p className="text-[16px] text-white">Salads</p>
            <p className="text-[16px] text-white">Pizzas</p>
            <p className="text-[16px] text-white">Main dishes</p>
            <p className="text-[16px] text/text-white">Desserts</p>
          </div>
          <div className="flex flex-col gap-4  ">
            <p className="text-[16px] text-white">Side dish </p>
            <p className="text-[16px] text-white">Brunch</p>
            <p className="text-[16px] text-white">Beverages</p>
            <p className="text-[16px] text-white">Fish & Sea foods</p>
          </div>
        </div>
        <>
          <p className="text-[16px] text-muted-foreground mb-5">FOLLOW US</p>
          <img className="w-[72px]" src={"social (1).png"} />
        </>

        <Separator className="mx-20 " />
        <div className="flex gap-10 mx-20"></div>
        <a href="/" className="text-muted-foreground">
          Copy right 2024 Nomnom LLC
        </a>
        <a href="/" className="text-muted-foreground">
          Privacy policy{" "}
        </a>
        <a href="/" className="text-muted-foreground">
          Terms and conditoin
        </a>
        <a href="/" className="text-muted-foreground">
          Cookie policy
        </a>
      </div>
    </>
  );
}
