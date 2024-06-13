import Image from "next/image";
import Navbar from "./components/Navbar";
import BannerArea from "./components/BannerArea";

export default function Home() {
  return (
    <main className="bg-white">
       <Navbar />
       <BannerArea/>
    </main>
  );
}
