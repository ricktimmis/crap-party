import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function DefencePolicy() {
  return (
    <div className="min-h-screen bg-crap-off-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-crap-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-crap-blue/10 rounded-full p-4 flex items-center justify-center">
              <Image
                src="/images/home/defence.svg"
                alt="Defence Policy"
                width={48}
                height={48}
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-center text-crap-blue mb-8">
            Defence Policy
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-crap-blue mb-4">Overview</h2>
              <p className="text-lg text-crap-gray-900">
                Our defence policy focuses on strengthening national security through technological advancement, strategic partnerships, and modern military capabilities.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-crap-blue mb-4">Strategic Priorities</h2>
              <ul className="list-disc list-inside text-lg text-crap-gray-900 space-y-4">
                <li>Advanced cybersecurity infrastructure</li>
                <li>AI-powered defence systems</li>
                <li>Space-based defence capabilities</li>
                <li>Autonomous military vehicles</li>
                <li>International defence cooperation</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-crap-blue mb-4">Modernization Program</h2>
              <div className="text-lg text-crap-gray-900 space-y-4">
                <p>Our defence modernization includes:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Quantum computing research</li>
                  <li>Advanced drone technology</li>
                  <li>Military personnel training programs</li>
                  <li>Digital warfare capabilities</li>
                  <li>Strategic defence partnerships</li>
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