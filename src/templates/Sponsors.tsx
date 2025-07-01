import { Section } from '@/layout/Section';

const Sponsors = () => (
  <Section
    title="Featured Golf Courses"
    description="Experience the Sink or Win challenge at premier golf courses across Texas."
  >
    <div className="py-12 text-center">
      <p className="mb-8 text-lg text-brand">
        We&apos;re bringing the ultimate floating par-3 experience to golf
        courses across Texas and beyond.
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="rounded-lg bg-lightGreen p-6">
          <h3 className="mb-4 text-xl font-semibold text-brand">
            Premier Locations
          </h3>
          <p className="text-brand">Top-rated golf courses across the region</p>
        </div>
        <div className="rounded-lg bg-lightGreen p-6">
          <h3 className="mb-4 text-xl font-semibold text-brand">
            $10K Challenge
          </h3>
          <p className="text-brand">
            Exciting hole-in-one prizes for every player
          </p>
        </div>
        <div className="rounded-lg bg-lightGreen p-6">
          <h3 className="mb-4 text-xl font-semibold text-brand">
            Floating Par-3
          </h3>
          <p className="text-brand">Unique floating green experience</p>
        </div>
      </div>
    </div>
  </Section>
);

export { Sponsors };
