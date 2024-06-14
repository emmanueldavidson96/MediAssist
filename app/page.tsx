import Image from "next/image";
import Banner from "./_components/Banner";
import CategorySearch from "./_components/CategorySearch";
import PopularDoctors from "./_components/PopularDoctors";

export default function Home() {
  return (
    <section className="h-fit w-full">
      <Banner/>
      <CategorySearch/>
      <PopularDoctors/>

    </section>
    
  );
}
