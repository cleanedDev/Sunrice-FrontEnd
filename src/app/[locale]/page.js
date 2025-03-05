import Hero from "@/components/Landing/Hero";
import Section1 from "@/components/Landing/Section1";
import Section2 from "@/components/Landing/Section2";
import Section3 from "@/components/Landing/Section3";
import Section4 from "@/components/Landing/Section4";
import Section5 from "@/components/Landing/Section5";
import Section6 from "@/components/Landing/Section6";
import Section7 from "@/components/Landing/Section7";

export default function Home() {
  return (
    <div className="flex flex-col">
     <Hero id="heroSection"/>
     <Section1 id="section1"/>
     <Section2/>
     <Section3 id="section3"/>
     <Section4 id="section4"/>
     <Section5 id="section5"/>
     <Section6 id="section6"/>
     <Section7 id="section7"/>

    </div>
  );
}