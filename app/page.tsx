import Image from "next/image";
import Banner from "./_components/Banner";
import CategorySearch from "./_components/CategorySearch";

export default function Home() {
  return (
    <section className="h-fit w-full">
      <Banner/>
      <CategorySearch/>

    </section>
    
  );
}
