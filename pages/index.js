import Hero from "../components/Hero";
import OurServices from "../components/OurServices";
import MainLayout from "../layouts/Main";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <OurServices />
    </MainLayout>
  );
}
