import Link from 'next/link';
import React, { useState } from 'react';

import { Background } from '../background/Background';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Footer } from '../templates/Footer';

const Host = () => {
  const [formData, setFormData] = useState({
    name: '',
    courseName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage(
          "Host inquiry sent successfully! We'll get back to you soon.",
        );
        // Reset form
        setFormData({
          name: '',
          courseName: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        setStatusMessage(
          result.error || 'Failed to send inquiry. Please try again.',
        );
      }
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage(
        'Network error. Please check your connection and try again.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white text-brand antialiased">
      <Meta
        title="Host the Challenge - Sink or Win"
        description="Turn your water feature into $30,000+ of free cash flow with our floating par-3 challenge."
      />

      {/* Navigation */}
      <NavbarTwoColumns
        logo={<div className="text-2xl font-bold text-brand">Sink or Win</div>}
      >
        <li>
          <Link href="/" className="text-brand hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/#about" className="text-brand hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link href="/#contact" className="text-brand hover:underline">
            Contact
          </Link>
        </li>
      </NavbarTwoColumns>

      {/* Hero Section */}
      <Section>
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-6xl">
            Turn Your Water Feature Into $30,000+ of Free Cash Flow
          </h1>
          <p className="mb-6 text-base text-brand sm:text-lg md:text-xl">
            We install a floating green and let players take a $5 swing at a
            $10,000 shot. You collect a cut—no setup, no staff, no disruption.
          </p>
          <a href="#get-started">
            <button className="w-full rounded-lg bg-gold px-6 py-3 text-base font-bold text-brand transition-colors hover:bg-yellow-400 sm:w-auto sm:px-8 sm:py-4 sm:text-lg">
              👉 Talk to Us
            </button>
          </a>
        </div>
      </Section>

      {/* How It Works */}
      <Background color="bg-lightGreen">
        <Section>
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl md:text-4xl">
              How It Works
            </h2>
            <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 text-3xl font-bold text-gold">1</div>
                <h3 className="mb-4 text-xl font-semibold">
                  We Handle Everything
                </h3>
                <p className="mb-6 text-brand">
                  We bring the floating green, tee mats, balls, signage,
                  insurance—even the staff. You don&apos;t lift a finger.
                </p>
                <div className="mx-auto my-6 max-w-sm sm:my-8 sm:max-w-md">
                  <img
                    src="/we-handle-everything.png"
                    alt="We handle everything - floating green setup"
                    className="h-auto w-full rounded-lg"
                  />
                </div>
              </div>
              <div className="text-center">
                <div className="mb-4 text-3xl font-bold text-gold">2</div>
                <h3 className="mb-4 text-xl font-semibold">
                  Golfers Pay $5 to Play
                </h3>
                <p className="mb-6 text-brand">
                  Each swing is a $5 shot at a $10,000 hole-in-one. It runs like
                  a &quot;19th-hole&quot; side game—quick, fun, and viral.
                </p>
                <div className="mx-auto my-6 max-w-sm sm:my-8 sm:max-w-md">
                  <img
                    src="/golfers-pay-5-to-play.png"
                    alt="Golfers paying $5 to play the challenge"
                    className="h-auto w-full rounded-lg"
                  />
                </div>
              </div>
              <div className="text-center">
                <div className="mb-4 text-3xl font-bold text-gold">3</div>
                <h3 className="mb-4 text-xl font-semibold">You Get Paid</h3>
                <p className="mb-6 text-brand">
                  You receive a fixed % of the profits. Many courses earn
                  $5,000/month in pure margin—with zero operating cost.
                </p>
                <div className="mx-auto my-6 max-w-sm sm:my-8 sm:max-w-md">
                  <img
                    src="/you-get-paid.png"
                    alt="You get paid - course revenue from the challenge"
                    className="h-auto w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Background>

      {/* Money Talk */}
      <Section>
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-6 text-2xl font-bold sm:text-3xl md:text-4xl">
            Money Talk
          </h2>
          <div className="mb-6 rounded-lg bg-lightGreen p-4 sm:mb-8 sm:p-8">
            <p className="mb-4 text-base italic sm:text-lg md:text-xl">
              &quot;Our last course did over $3,000 in the first month. No
              labor, no liability. Just a lake + a shot at $10k.&quot;
            </p>
          </div>
          <div className="mx-auto my-6 max-w-sm sm:my-8 sm:max-w-lg">
            <img
              src="/money-talk-30000.png"
              alt="Money talk - $30,000 revenue potential"
              className="h-auto w-full rounded-lg"
            />
          </div>
          <p className="text-base text-brand sm:text-lg">
            This is passive income with a built-in marketing engine. Most
            players film and post their shots—tagging your course and spreading
            the word.
          </p>
        </div>
      </Section>

      {/* No-Risk Pilot Program */}
      <Background color="bg-lightGreen">
        <Section>
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="mb-6 text-2xl font-bold sm:text-3xl md:text-4xl">
              No-Risk Pilot Program
            </h2>
            <div className="mb-6 rounded-lg bg-white p-4 sm:mb-8 sm:p-8">
              <p className="mb-4 text-base italic sm:text-lg md:text-xl">
                &quot;Worst-case scenario: you had a floating green on your lake
                for a few weeks.&quot;
              </p>
            </div>
            <p className="text-base text-brand sm:text-lg">
              We run a 30-day pilot. If it doesn&apos;t fit your layout or vibe,
              we pack it up the same day and leave no trace. No pressure. No
              commitment.
            </p>
          </div>
        </Section>
      </Background>

      {/* Why Most Courses Say Yes */}
      <Section>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-6 text-center text-2xl font-bold sm:text-3xl md:text-4xl">
            Why Most Courses Say Yes
          </h2>
          <div className="mx-auto my-6 max-w-sm sm:my-8 sm:max-w-lg">
            <img
              src="/viral-social-shots.png"
              alt="Viral social media shots from players"
              className="h-auto w-full rounded-lg"
            />
          </div>
          <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <div className="mt-1 size-2 rounded-full bg-gold"></div>
              <p className="text-brand">Zero cost to host</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 size-2 rounded-full bg-gold"></div>
              <p className="text-brand">No disruption to pace of play</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 size-2 rounded-full bg-gold"></div>
              <p className="text-brand">
                Great for tournaments & charity scrambles
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 size-2 rounded-full bg-gold"></div>
              <p className="text-brand">
                Social media gold — players tag your course organically
              </p>
            </div>
            <div className="flex items-start gap-3 md:col-span-2">
              <div className="mt-1 size-2 rounded-full bg-gold"></div>
              <p className="text-brand">
                Adds revenue without lifting a finger
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Form */}
      <Background color="bg-lightGreen">
        <Section>
          <div id="get-started" className="mx-auto max-w-2xl px-4">
            <h2 className="mb-6 text-center text-2xl font-bold sm:text-3xl md:text-4xl">
              Get Started
            </h2>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 rounded bg-green-100 p-4 text-green-700">
                {statusMessage}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-6 rounded bg-red-100 p-4 text-red-700">
                {statusMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-semibold">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-brand bg-white px-4 py-3 text-brand focus:border-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-semibold">
                    Course Name *
                  </label>
                  <input
                    type="text"
                    name="courseName"
                    required
                    value={formData.courseName}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-brand bg-white px-4 py-3 text-brand focus:border-gold focus:outline-none"
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-semibold">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-brand bg-white px-4 py-3 text-brand focus:border-gold focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-semibold">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border border-brand bg-white px-4 py-3 text-brand focus:border-gold focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block font-semibold">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border border-brand bg-white px-4 py-3 text-brand focus:border-gold focus:outline-none"
                  placeholder="Tell us about your course and water feature..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-gold px-6 py-3 text-base font-bold text-brand transition-colors hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </Section>
      </Background>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Host;
