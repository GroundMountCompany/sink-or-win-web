import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Ready to take the ultimate floating par-3 challenge?"
      subtitle="Test your skills and win big with our exciting hole-in-one challenge."
      button={
        <a
          href="#pricing"
          className="inline-flex items-center justify-center rounded bg-gold px-6 py-3 text-center text-base font-medium text-brand hover:bg-yellow-400"
        >
          Choose Your Shot Pack
        </a>
      }
    />
  </Section>
);

export { Banner };
