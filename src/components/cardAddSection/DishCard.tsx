import { Button } from "../ui/button";

type DishCardProps = {
  name: string;
  price: string;
  url: any;
  description: string;
};
export function DishCard({ name, price, url, description }: DishCardProps) {
  return (
    <>
      <div className="w-[270px] h-[241px] flex flex-col gap-2 py-6 border border-border items-center justify-center rounded-[20px] ">
        <Button
          // onClick={""}
          className="absolute border rounded-full w-11 bg-background pb-2 px-4"
        >
          {/* <img src={`${}`} alt="" /> */}
        </Button>
        <img
          className="w-60 h-30 border rounded-[20px] relative"
          src={"food.jpeg"}
        />
        <div className="flex justify-between gap-4  px-2">
          <p className="text-red-500 text-[14px]  ">{name}</p>
          <p className="text-foreground text-[12px]">${price}</p>
        </div>
        <div className="text-[12px] flex px-4 text-foreground">
          {description}
        </div>
      </div>
    </>
  );
}
