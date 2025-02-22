import Hero from "@/components/Landing/Hero";
import Section1 from "@/components/Landing/Section1";
import Section2 from "@/components/Landing/Section2";

export default function Home() {
  return (
    <div className="flex flex-col">
     <Hero id="heroSection"/>
     <Section1 id="section1"/>
     <Section2/>

    </div>
  );
}