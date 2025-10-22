import { DishCard } from "./DishCard";

type FoodDetailProps = {
  categoryName: string;
};
export function FoodDetail({ categoryName }: FoodDetailProps) {
  // alert iig =>sonner bolgoh
  return (
    <>
      <div className="background/bg-primary-20 w-screen h-full flex flex-col gap-10">
        <div className="text-white font-bold text-8">{categoryName}</div>
        <DishCard
          name={"finger food"}
          price={"12.3"}
          url={"fingerFood.png"}
          description={
            "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar."
          }
        />
      </div>
    </>
  );
}
