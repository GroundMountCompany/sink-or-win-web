const HowItWorks = () => (
  <section
    id="how-it-works"
    className="bg-lightGreen py-12 text-brand sm:py-20"
  >
    <div className="mx-auto max-w-4xl px-4 text-center">
      <h2 className="mb-8 text-2xl font-bold sm:text-3xl md:text-4xl">
        How It Works
      </h2>
      <p className="mb-6 text-base text-brand sm:text-lg">
        Now launching across DFW.
      </p>
      <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
        <div>
          <h3 className="mb-2 text-xl font-semibold">1. Take the Shot</h3>
          <p>
            Step up to the tee and fire your shot toward the floating green.
          </p>
        </div>
        <div>
          <h3 className="mb-2 text-xl font-semibold">2. Stick the Landing</h3>
          <p>
            Land it and stay on the green? You earn a free shot—immediately.
          </p>
        </div>
        <div>
          <h3 className="mb-2 text-xl font-semibold">3. Win $10K</h3>
          <p>If that ball drops in the cup, you walk away with $10,000.</p>
        </div>
      </div>
    </div>
  </section>
);

export { HowItWorks };
