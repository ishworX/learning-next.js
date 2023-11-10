import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";

function Home() {
  return (
    <main className='flex min-h-screen flex-col text--colors_default bg--default'>
      <Navbar />
      <div class='container mx-auto mt-24 px-12 py-4'>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      </div>

      <h1 className='text-3xl font-bold underline text--colors_primary px-20 py-12'>
        This is the landing page.
      </h1>
    </main>
  );
}

export default Home;