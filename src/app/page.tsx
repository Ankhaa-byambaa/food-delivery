import { FoodDetail } from "@/components/cardAddSection";
import { Layout } from "@/components/home/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <div>
          <img className="w-full h-130" src={"BG.png"} />
          <div className=" flex flex-col  ">
            <FoodDetail categoryName="Appetizers" />
            <FoodDetail categoryName="Salads" />
            <FoodDetail categoryName="Lunch favorites" />
          </div>
        </div>
      </Layout>
    </>
  );
}
