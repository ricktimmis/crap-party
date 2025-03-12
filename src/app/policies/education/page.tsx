import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function EducationPolicy() {
  return (
    <div className="min-h-screen bg-crap-off-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-crap-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-crap-blue/10 rounded-full p-4 flex items-center justify-center">
              <Image
                src="/images/home/education.svg"
                alt="Education Policy"
                width={48}
                height={48}
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-center text-crap-blue mb-8">
            Education Policy
          </h1>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-crap-blue mb-4">Overview</h2>
              <p className="text-lg text-crap-gray-900">
                Our education policy aims to revolutionize learning through innovative teaching methods, technology integration, and ensuring equal access to quality education for all citizens.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-crap-blue mb-4">Key Initiatives</h2>
              <ul className="list-disc list-inside text-lg text-crap-gray-900 space-y-4">
                <li>AI-powered personalized learning platforms</li>
                <li>Free university education for all British citizens</li>
                <li>Mandatory coding and digital skills curriculum</li>
                <li>Industry-integrated apprenticeship programs</li>
                <li>Lifelong learning support system</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-crap-blue mb-4">Implementation Strategy</h2>
              <div className="text-lg text-crap-gray-900 space-y-4">
                <p>Our education reform will be implemented through:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Modern technology infrastructure in all schools</li>
                  <li>Teacher training and development programs</li>
                  <li>Partnership with tech industry leaders</li>
                  <li>Research-based curriculum development</li>
                  <li>Community learning centers in every district</li>
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