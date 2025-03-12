import React from 'react';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-crap-off-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-crap-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-crap-blue mb-8">
            Contact Us
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-crap-blue mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-crap-gray-900 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-crap-gray-200 rounded-md focus:ring-2 focus:ring-crap-blue focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-crap-gray-900 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-crap-gray-200 rounded-md focus:ring-2 focus:ring-crap-blue focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-crap-gray-900 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-crap-gray-200 rounded-md focus:ring-2 focus:ring-crap-blue focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-crap-red hover:bg-crap-red-dark text-white px-6 py-2 rounded-md font-bold transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-crap-blue mb-6">Get in touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-crap-blue mb-2">Party Headquarters</h3>
                  <p className="text-crap-gray-900">
                    123 Parliament Street<br />
                    Westminster<br />
                    London, SW1A 0AA
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-crap-blue mb-2">Contact Details</h3>
                  <p className="text-crap-gray-900">
                    Phone: 020 7123 4567<br />
                    Email: info@crapparty.org
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-crap-blue mb-2">Office Hours</h3>
                  <p className="text-crap-gray-900">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-crap-gray-200 pt-8 mt-12">
            <Link 
              href="/"
              className="inline-flex items-center text-crap-blue hover:text-crap-blue-dark font-semibold"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 