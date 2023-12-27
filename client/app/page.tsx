import Featured from "@/components/featured/Featured";
import Hero from "@/components/hero/Hero";
import WhyUs from "@/components/whyUs/WhyUs";

export default function Home() {
  return (
    <main className="main">
      <Hero />
      <Featured/>
      <WhyUs/>
    </main>
  );
}
