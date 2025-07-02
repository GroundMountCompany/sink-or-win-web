'use client';

import { useState } from 'react';

const PartnerSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    courseName: '',
    waterFeature: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
        body: JSON.stringify({
          name: formData.name,
          courseName: formData.courseName,
          email: formData.email,
          phone: formData.phone,
          message: `Partner Inquiry\n\nContact Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nGolf Course: ${formData.courseName}\nLarge Water Feature: ${formData.waterFeature}\n\nAdditional Message: ${formData.message}`,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage(
          "Partner inquiry sent successfully! We'll get back to you soon.",
        );
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          courseName: '',
          waterFeature: '',
          message: '',
        });
        // Close modal after a delay
        setTimeout(() => {
          setShowForm(false);
          setSubmitStatus('idle');
        }, 3000);
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="relative w-full max-w-xl rounded-2xl bg-white p-8 text-brand shadow-xl">
            <button
              onClick={() => setShowForm(false)}
              className="absolute right-4 top-3 text-xl text-brand hover:text-brand/80"
            >
              ✕
            </button>
            <h3 className="mb-4 text-2xl font-bold">Partner Inquiry</h3>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-4 rounded bg-green-100 p-3 text-green-700">
                {statusMessage}
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-4 rounded bg-red-100 p-3 text-red-700">
                {statusMessage}
              </div>
            )}

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block font-medium">Contact Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded border border-brand bg-white px-4 py-2 text-brand"
                />
              </div>
              <div>
                <label className="mb-1 block font-medium">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded border border-brand bg-white px-4 py-2 text-brand"
                />
              </div>
              <div>
                <label className="mb-1 block font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded border border-brand bg-white px-4 py-2 text-brand"
                />
              </div>
              <div>
                <label className="mb-1 block font-medium">Golf Course</label>
                <input
                  type="text"
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleInputChange}
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
                      name="waterFeature"
                      value="Yes"
                      checked={formData.waterFeature === 'Yes'}
                      onChange={handleInputChange}
                      required
                      className="accent-brand"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="waterFeature"
                      value="No"
                      checked={formData.waterFeature === 'No'}
                      onChange={handleInputChange}
                      required
                      className="accent-brand"
                    />
                    <span>No</span>
                  </label>
                </div>
              </div>
              <div>
                <label className="mb-1 block font-medium">
                  Additional Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full rounded border border-brand bg-white px-4 py-2 text-brand"
                  placeholder="Tell us more about your course..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 w-full rounded-xl bg-gold py-3 font-semibold text-brand hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export { PartnerSection };
