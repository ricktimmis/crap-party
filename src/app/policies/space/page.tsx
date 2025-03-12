import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SpacePolicy() {
  return (
    <div className="min-h-screen bg-crap-off-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-crap-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-crap-blue/10 rounded-full p-4 flex items-center justify-center">
              <Image
                src="/images/home/space.svg"
                alt="Space Exploration"
                width={48}
                height={48}
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-center text-crap-blue mb-8">
            Space Exploration
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-crap-blue mb-4">Overview</h2>
              <p className="text-lg text-crap-gray-900">
                Our ambitious space program aims to establish Britain as a world leader in space exploration, resource gathering, and eventual colonization of other celestial bodies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-crap-blue mb-4">Key Initiatives</h2>
              <ul className="list-disc list-inside text-lg text-crap-gray-900 space-y-4">
                <li>Development of British space launch capabilities</li>
                <li>Asteroid mining research and development</li>
                <li>International space station partnerships</li>
                <li>Mars colonization preparation program</li>
                <li>Space tourism infrastructure development</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-crap-blue mb-4">Economic Benefits</h2>
              <div className="text-lg text-crap-gray-900 space-y-4">
                <p>Our space program will deliver significant economic advantages:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Creation of high-skilled aerospace jobs</li>
                  <li>Development of new technologies with commercial applications</li>
                  <li>Access to valuable space resources</li>
                  <li>International partnership opportunities</li>
                  <li>Growth in the UK space tourism sector</li>
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