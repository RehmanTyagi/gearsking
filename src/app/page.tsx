import StackedSlider from "@/components/StackedSlider";
import Image from "next/image";
const imgs = [
  "/slider/slide-1.jpeg",
  "/slider/slide-2.jpg",
  "/slider/slide-3.jpeg",
];

function Home() {
  return (
    <div className="container mx-auto">
      <StackedSlider images={imgs} />
      <div className="grid-rows my-10 hidden h-[600px] gap-5 sm:grid sm:grid-cols-2 sm:grid-rows-12">
        <div className="relative sm:row-span-12">
          <Image src="/wallpapers/sale-1.jpg" fill alt="image" />
        </div>
        <div className="relative sm:row-span-6">
          <Image src="/wallpapers/sale-2.jpg" fill alt="image" />
        </div>
        <div className="relative sm:row-span-6">
          <Image src="/wallpapers/sale-3.jpg" fill alt="image" />
        </div>
      </div>
    </div>
  );
}

export default Home;
