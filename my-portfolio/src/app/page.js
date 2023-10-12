import Image from 'next/image'
import HeroSection from '../components/heroSection'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <h1>Hello World </h1>
        <p>This is just a test pagaraph for the website!</p>
        <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        </div>
      </section>
          
    </main>
  )
}
