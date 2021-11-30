import Hero from "../components/Hero";
import OurServices from "../components/OurServices";
import Projects from "../components/Projects";
import MainLayout from "../layouts/Main";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <OurServices />
      <Projects />
    </MainLayout>
  );
}
