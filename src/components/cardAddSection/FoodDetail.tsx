import { DishCard } from "./DishCard";

type FoodDetailProps = {
  categoryName: string;
};
export function FoodDetail({ categoryName }: FoodDetailProps) {
  // alert iig =>sonner bolgoh
  // fetch hiiigeed awsan data gaa orullad map hiih
  // alertdiolog oor hih

  return (
    <>
      <div className="bg-neutral-700 w-screen h-full flex flex-col gap-10 py-10 px-10">
        <div className="text-white font-bold text-[32px]">{categoryName}</div>
        <div className="flex gap-7 flex-wrap">
          <DishCard
            name={"Cranberry Brie Bites"}
            price={"12.99"}
            url={"1.png"}
            description={
              "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar."
            }
          />
          <DishCard
            name={"Burrata Caprese"}
            price={"12.3"}
            url={"2.png"}
            description={
              "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar."
            }
          />
          <DishCard
            name={"Betroot and orange salad"}
            price={"12.3"}
            url={"4.png"}
            description={
              "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar."
            }
          />
          <DishCard
            name={"finger food"}
            price={"12.3"}
            url={"3.png"}
            description={
              "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar."
            }
          />
          <DishCard
            name={"Brie Crostini Appetizer"}
            price={"12.3"}
            url={"2.png"}
            description={
              "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar."
            }
          />
          <DishCard
            name={"Cranberry Brie Bites"}
            price={"12.3"}
            url={"5.png"}
            description={
              "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar."
            }
          />
        </div>
      </div>
    </>
  );
}
