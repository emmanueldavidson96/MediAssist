import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white">
      <nav className="w-[90%] m-auto h-[80px] flex gap-14 items-center">
        <h1 className="text-slate-400 text-4xl font-black">Medi<span className="text-blue-600">Assist</span></h1>
        <div className="w-fit flex gap-6">
          <p className="text-blue-500">Home</p>
          <p className="text-blue-500">Explore</p>
          <p className="text-blue-500">Contact Us</p>
        </div>
      </nav>    
    </main>
  );
}
