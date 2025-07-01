const MoneyShot = () => (
  <section className="bg-white py-12 text-brand sm:py-24">
    <div className="mx-auto max-w-4xl px-4 sm:px-6">
      <h2 className="mb-6 text-center text-2xl font-bold sm:text-3xl md:text-4xl">
        The Money Shot
      </h2>
      <p className="mb-8 text-center text-base sm:mb-12 sm:text-lg">
        Every shot is a chance at $10K. Here&apos;s what goes down:
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-brand">
          <thead>
            <tr>
              <th className="border-b border-brand px-4 py-3 text-left">
                Item
              </th>
              <th className="border-b border-brand px-4 py-3 text-left">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-brand/30 px-4 py-3">
                Price per shot
              </td>
              <td className="border-b border-brand/30 px-4 py-3">$5</td>
            </tr>
            <tr>
              <td className="border-b border-brand/30 px-4 py-3">
                Land in the water
              </td>
              <td className="border-b border-brand/30 px-4 py-3">
                Lose your money
              </td>
            </tr>
            <tr>
              <td className="border-b border-brand/30 px-4 py-3">
                Land on the green
              </td>
              <td className="border-b border-brand/30 px-4 py-3">
                Get a free shot
              </td>
            </tr>
            <tr>
              <td className="border-b border-brand/30 px-4 py-3">
                Hit a hole-in-one
              </td>
              <td className="border-b border-brand/30 px-4 py-3">
                Win $10,000
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-8 text-center text-base text-brand">
        Bonus: Get 5 shots for $20 or 10 for $35. Bigger the bucket, better the
        odds.
      </p>
    </div>
  </section>
);

export { MoneyShot };
