import { FoodDetail } from "@/components/cardAddSection";
import { Footer, Header, Layout } from "@/components/home";

export default function page() {
  // alert iig =>sonner bolgoh
  return (
    <>
      <Header foodDetail={true} />
      <div className="w-full h-screen bg-neutral-700">
        <FoodDetail categoryName="Appetizers" />
      </div>
      <Footer foodDetail={true} />
    </>
  );
}
