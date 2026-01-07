import { Hero } from '@/components/landing/Hero';
import { Statistics } from '@/components/landing/Statistics';
import { Problem } from '@/components/landing/Problem';
import { Solution } from '@/components/landing/Solution';
import { RealWorldImpact } from '@/components/landing/RealWorldImpact';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Features } from '@/components/landing/Features';
import { WhoWeServe } from '@/components/landing/WhoWeServe';
import { SuccessStories } from '@/components/landing/SuccessStories';
import { ImpactDashboard } from '@/components/landing/ImpactDashboard';
import { Partners } from '@/components/landing/Partners';
import { CTA } from '@/components/landing/CTA';
import { Footer } from '@/components/landing/Footer';
import { Navbar } from '@/components/navigation/Navbar';
import { ZuriAssistant } from '@/components/landing/ZuriAssistant';

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Statistics />
      <Problem />
      <Solution />
      <RealWorldImpact />
      <HowItWorks />
      <Features />
      <WhoWeServe />
      <SuccessStories />
      <ImpactDashboard />
      <Partners />
      <CTA />
      <Footer />
      <ZuriAssistant />
    </main>
  );
}
