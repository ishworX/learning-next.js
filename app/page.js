import React from 'react';
import Navbar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import EmailSection from "../components/EmailSection";
import Footer from "../components/Footer";


function Home() {
  return (
    <main className='flex min-h-screen flex-col text--colors_default bg--default'>
      <Navbar />
      <div class='container mx-auto mt-24 px-12 py-4'>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <EmailSection />
      </div>
      <Footer />
    </main>
  );
}

export default Home;