import React from 'react';
import Navbar from '@/components/nav';
import HeroSection from '@/components/heroSection';

function Home() {
  return (
    <main className='flex min-h-screen flex-col text--colors_default bg--default'>
      <Navbar />
      <div class='container mx-auto px-12 py-4'>
      <HeroSection />
      </div>

      <h1 className='text-3xl font-bold underline text--colors_primary px-20 py-12'>
        This is the landing page.
      </h1>
    </main>
  );
}

export default Home;