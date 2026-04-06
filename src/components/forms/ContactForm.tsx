'use client';

import { useState } from 'react';
import { Button } from '@/components/ui';
import { cn, isValidEmail, isValidPhone } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  contactType: 'buyer' | 'dealer' | 'oem' | 'other';
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    contactType: 'buyer',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (formData.phone && !isValidPhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // TODO: Implement actual form submission
    // For now, simulate a submission delay
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // TODO: Replace with actual form submission logic
      // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });

      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      // TODO: Handle submission error
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-heading-sm text-secondary-900 mb-2">Message sent</h3>
        <p className="text-body text-secondary-600 mb-6">
          Thank you for reaching out. We typically respond within one business day.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-body-sm font-medium text-secondary-700 mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={cn(
            'w-full px-4 py-3 rounded-lg border bg-white transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
            errors.name
              ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
              : 'border-secondary-200 hover:border-secondary-300'
          )}
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="mt-1 text-body-sm text-red-600">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-body-sm font-medium text-secondary-700 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={cn(
            'w-full px-4 py-3 rounded-lg border bg-white transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
            errors.email
              ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
              : 'border-secondary-200 hover:border-secondary-300'
          )}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-body-sm text-red-600">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-body-sm font-medium text-secondary-700 mb-1">
          Phone <span className="text-secondary-400">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={cn(
            'w-full px-4 py-3 rounded-lg border bg-white transition-colors',
            'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
            errors.phone
              ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
              : 'border-secondary-200 hover:border-secondary-300'
          )}
          placeholder="(555) 123-4567"
        />
        {errors.phone && (
          <p className="mt-1 text-body-sm text-red-600">{errors.phone}</p>
        )}
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-body-sm font-medium text-secondary-700 mb-1">
          Company <span className="text-secondary-400">(optional)</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-secondary-200 bg-white hover:border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
          placeholder="Your company or organization"
        />
      </div>

      {/* Contact Type */}
      <div>
        <label htmlFor="contactType" className="block text-body-sm font-medium text-secondary-700 mb-1">
          I am a... <span className="text-red-500">*</span>
        </label>
        <select
          id="contactType"
          name="contactType"
          value={formData.contactType}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-secondary-200 bg-white hover:border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
        >
          <option value="buyer">Equipment Buyer</option>
          <option value="dealer">Dealer</option>
          <option value="oem">OEM / Manufacturer</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-body-sm font-medium text-secondary-700 mb-1">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={cn(
            'w-full px-4 py-3 rounded-lg border bg-white transition-colors resize-none',
            'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500',
            errors.message
              ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
              : 'border-secondary-200 hover:border-secondary-300'
          )}
          placeholder="Tell us about your project or question..."
        />
        {errors.message && (
          <p className="mt-1 text-body-sm text-red-600">{errors.message}</p>
        )}
      </div>

      {/* Submit */}
      <div>
        <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </Button>
      </div>

      <p className="text-body-sm text-secondary-500">
        By submitting this form, you agree to our{' '}
        <a href="/privacy" className="text-primary-600 hover:text-primary-700 underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}
