const Pricing = () => (
  <section id="pricing" className="bg-lightGreen py-12 text-brand sm:py-20">
    <div className="mx-auto max-w-5xl px-4 text-center">
      <h2 className="mb-8 text-2xl font-bold sm:mb-10 sm:text-3xl md:text-4xl">
        Pick Your Pack
      </h2>
      <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
        <div className="rounded-xl border border-brand p-6">
          <h3 className="mb-2 text-2xl font-semibold">1 Shot</h3>
          <p className="mb-4 text-brand">No frills. Just grip it and rip it.</p>
          <p className="mb-4 text-3xl font-bold">$5</p>
        </div>
        <div className="rounded-xl border border-brand p-6">
          <h3 className="mb-2 text-2xl font-semibold">5 Shots</h3>
          <p className="mb-4 text-brand">Stack your odds and save a little.</p>
          <p className="mb-4 text-3xl font-bold">$20</p>
        </div>
        <div className="rounded-xl border border-brand bg-gold p-6 text-brand">
          <h3 className="mb-2 text-2xl font-semibold">10 Shots</h3>
          <p className="mb-4">Best deal. Best chance. Most fun.</p>
          <p className="mb-4 text-3xl font-bold">$35</p>
        </div>
      </div>
    </div>
  </section>
);

export { Pricing };
