import React from 'react';

const Contact = () => (
  <section id="contact" className="bg-white py-20 text-brand">
    <div className="mx-auto max-w-2xl px-4 text-center">
      <h2 className="mb-6 text-4xl font-bold">Got Questions?</h2>
      <p className="mb-8 text-brand">
        Want Sink or Win at your course? Media inquiry? Just want to say you
        almost made it? Hit us below.
      </p>
      <form
        action="mailto:erik@sinkorwin.com"
        method="POST"
        encType="text/plain"
        className="space-y-4 text-left"
      >
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full rounded border border-brand bg-white p-3 text-brand"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="w-full rounded border border-brand bg-white p-3 text-brand"
        />
        <textarea
          name="message"
          rows={4}
          placeholder="Your message"
          required
          className="w-full rounded border border-brand bg-white p-3 text-brand"
        ></textarea>
        <button
          type="submit"
          className="rounded bg-gold px-6 py-3 font-semibold text-brand hover:bg-yellow-400"
        >
          Send Message
        </button>
      </form>
    </div>
  </section>
);

export { Contact };
