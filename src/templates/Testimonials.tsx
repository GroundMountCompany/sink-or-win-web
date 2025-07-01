const Testimonials = () => (
  <section id="testimonials" className="bg-lightGreen py-20 text-brand">
    <div className="mx-auto max-w-4xl px-4 text-center">
      <h2 className="mb-10 text-4xl font-bold">Now in Texas.</h2>
      <p className="mb-12 text-lg">
        Golfers from across the region have taken the shot. Here&apos;s what
        they said.
      </p>
      <div className="grid gap-8 text-left md:grid-cols-2">
        <div className="rounded-xl bg-white p-6">
          <p>
            &quot;I dropped it 3 feet short at Eagle Creek. Still the most fun
            I&apos;ve had without leaving the tee box.&quot;
          </p>
          <p className="mt-4 font-semibold">— Mike C.</p>
        </div>
        <div className="rounded-xl bg-white p-6">
          <p>
            &quot;The floating green at Otter Creek is unreal. Like playing a
            video game—but you can win real money.&quot;
          </p>
          <p className="mt-4 font-semibold">— Kaitlyn B.</p>
        </div>
        <div className="rounded-xl bg-white p-6">
          <p>
            &quot;My buddy hit the edge at The Fort Golf Resort and still won a
            free beer. We&apos;ll be back.&quot;
          </p>
          <p className="mt-4 font-semibold">— Jordan S.</p>
        </div>
        <div className="rounded-xl bg-white p-6">
          <p>
            &quot;I thought $5 a shot was steep... until I almost aced it at
            Swan Lake. Worth every penny.&quot;
          </p>
          <p className="mt-4 font-semibold">— Travis W.</p>
        </div>
        <div className="rounded-xl bg-white p-6">
          <p>
            &quot;Played it at Purgatory Golf Club and my heart was racing. Sink
            or Win is addictive.&quot;
          </p>
          <p className="mt-4 font-semibold">— Rachel H.</p>
        </div>
      </div>
    </div>
  </section>
);

export { Testimonials };
