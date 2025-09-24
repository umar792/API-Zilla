import { BackgroundPattern } from "@/components/background-pattern";
import Hero from "@/components/hero";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="w-[100%] min-h-[100vh] px-[10px] xsm:px-[50px] pt-[20px] max-w-[1800px] mx-auto">
      <div className="w-[100%] h-[100vh]">
        <BackgroundPattern/>
       <Navbar/>
       <Hero/>
      </div>
    </div>
  );
}
