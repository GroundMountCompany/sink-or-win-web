import React, { useState } from 'react';

const Contact = () => {
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
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage(
          "Message sent successfully! We'll get back to you soon.",
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
          result.error || 'Failed to send message. Please try again.',
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
    <section id="contact" className="bg-white py-20 text-brand">
      <div className="mx-auto max-w-2xl px-4 text-center">
        <h2 className="mb-6 text-4xl font-bold">Got Questions?</h2>
        <p className="mb-8 text-brand">
          Want Sink or Win at your course? Media inquiry? Just want to say you
          almost made it? Hit us below.
        </p>

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

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your name"
            required
            className="w-full rounded border border-brand bg-white p-3 text-brand"
          />
          <input
            type="text"
            name="courseName"
            value={formData.courseName}
            onChange={handleInputChange}
            placeholder="Course name (optional)"
            className="w-full rounded border border-brand bg-white p-3 text-brand"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your email"
            required
            className="w-full rounded border border-brand bg-white p-3 text-brand"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Your phone (optional)"
            className="w-full rounded border border-brand bg-white p-3 text-brand"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            placeholder="Your message"
            required
            className="w-full rounded border border-brand bg-white p-3 text-brand"
          ></textarea>
          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded bg-gold px-6 py-3 font-semibold text-brand hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export { Contact };
