import { Button } from '@/components/ui/button';

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform African Healthcare?</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join the movement. Whether you're a researcher, institution, or developer.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" variant="secondary">Create Free Account</Button>
          <Button size="lg" variant="outline" className="bg-white text-primary-600">Contact Sales</Button>
        </div>
      </div>
    </section>
  );
}
