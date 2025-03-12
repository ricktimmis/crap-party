import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HealthcarePolicy() {
  return (
    <div className="min-h-screen bg-crap-off-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-crap-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-crap-blue/10 rounded-full p-4 flex items-center justify-center">
              <Image
                src="/images/home/healthcare.svg"
                alt="Healthcare Policy"
                width={48}
                height={48}
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-center text-crap-blue mb-8">
            Healthcare Policy
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-crap-blue mb-4">Overview</h2>
              <p className="text-lg text-crap-gray-900">
                Our healthcare policy focuses on building a modern, efficient, and accessible healthcare system that emphasizes prevention, innovation, and comprehensive care for all citizens.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-crap-blue mb-4">Key Initiatives</h2>
              <ul className="list-disc list-inside text-lg text-crap-gray-900 space-y-4">
                <li>AI-driven diagnostic systems</li>
                <li>Preventive healthcare programs</li>
                <li>Mental health support expansion</li>
                <li>Remote healthcare services</li>
                <li>Medical research investment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-crap-blue mb-4">Healthcare Innovation</h2>
              <div className="text-lg text-crap-gray-900 space-y-4">
                <p>Our modernization program includes:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Digital health records system</li>
                  <li>Automated appointment scheduling</li>
                  <li>Predictive healthcare analytics</li>
                  <li>Robotic surgery capabilities</li>
                  <li>Personalized medicine programs</li>
                </ul>
              </div>
            </section>

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
    </div>
  );
} 