'use client';

import { useState } from 'react';

const PartnerSection = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="mx-auto my-12 max-w-5xl rounded-xl bg-lightGreen p-8">
      <div className="flex flex-col items-center justify-between text-brand md:flex-row">
        <div>
          <h2 className="mb-2 text-2xl font-bold">
            Ready to transform your golf course with the ultimate floating par-3
            challenge?
          </h2>
          <p className="text-xl text-brand">
            Join our network of premier courses and start attracting more
            players today.
          </p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          data-partner-button
          className="mt-6 rounded-xl bg-gold px-6 py-4 text-xl font-semibold text-brand transition hover:bg-yellow-400 md:mt-0"
        >
          Partner With Us
        </button>
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 px-4">
          <div className="relative w-full max-w-xl rounded-2xl bg-white p-8 text-brand shadow-xl">
            <button
              onClick={() => setShowForm(false)}
              className="absolute right-4 top-3 text-xl text-brand hover:text-brand/80"
            >
              ✕
            </button>
            <h3 className="mb-4 text-2xl font-bold">Partner Inquiry</h3>

            {/* Email Form */}
            <form
              className="space-y-4"
              method="POST"
              action="mailto:erik@sinkorwin.com"
              encType="text/plain"
            >
              <div>
                <label className="mb-1 block font-medium">Contact Name</label>
                <input
                  type="text"
                  name="Name"
                  required
                  className="w-full rounded border border-brand bg-white px-4 py-2 text-brand"
                />
              </div>
              <div>
                <label className="mb-1 block font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="Phone"
                  required
                  className="w-full rounded border border-brand bg-white px-4 py-2 text-brand"
                />
              </div>
              <div>
                <label className="mb-1 block font-medium">Email</label>
                <input
                  type="email"
                  name="Email"
                  required
                  className="w-full rounded border border-brand bg-white px-4 py-2 text-brand"
                />
              </div>
              <div>
                <label className="mb-1 block font-medium">Golf Course</label>
                <input
                  type="text"
                  name="Golf Course"
                  required
                  className="w-full rounded border border-brand bg-white px-4 py-2 text-brand"
                />
              </div>
              <div>
                <label className="mb-2 block font-medium">
                  Do you have a large water feature?
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="Large Water Feature"
                      value="Yes"
                      required
                      className="accent-brand"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="Large Water Feature"
                      value="No"
                      required
                      className="accent-brand"
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 w-full rounded-xl bg-gold py-3 font-semibold text-brand hover:bg-yellow-400"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export { PartnerSection };
