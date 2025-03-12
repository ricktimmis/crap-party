import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AgriculturalInnovationArticle() {
  return (
    <div className="min-h-screen bg-crap-off-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-crap-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-crap-blue/10 rounded-full p-4 flex items-center justify-center">
              <Image
                src="/images/news/agriculture.svg"
                alt="Agricultural Innovation"
                width={48}
                height={48}
              />
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-crap-blue mb-4">
              Agricultural Innovation Co-op Proposal
            </h1>
            <p className="text-crap-gray-600">March 20, 2024</p>
          </div>

          <div className="space-y-6 text-lg text-crap-gray-900">
            <p>
              The CRAP Party believes in empowering British farmers through innovation and free market principles. We propose the creation of a farmer-owned agricultural innovation co-op, funded initially by the government, to drive research and development in robotics, automation, and sustainable practices. This co-op will operate independently, with farmers contributing a portion of their profits to ensure its long-term viability.
            </p>

            <p>
              To support this initiative, we will repeal unnecessary regulations and taxes that hinder farmers' success, including inheritance tax on family farms. This will encourage the transfer of knowledge and keep farms within farming families.
            </p>

            <p>
              Our goal is to create a thriving agricultural sector that is both economically and environmentally sustainable, ensuring food security for the nation while protecting our rural heritage.
            </p>

            <div className="bg-crap-off-white rounded-xl p-6 mt-8">
              <h2 className="text-2xl font-bold text-crap-blue mb-4">Key Points:</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Creation of farmer-owned agricultural innovation co-op</li>
                <li>Government initial funding with sustainable farmer contributions</li>
                <li>Focus on robotics, automation, and sustainable practices</li>
                <li>Removal of inheritance tax on family farms</li>
                <li>Reduction of unnecessary regulations</li>
                <li>Emphasis on economic and environmental sustainability</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-crap-gray-200 pt-8 mt-12">
            <Link 
              href="/news"
              className="inline-flex items-center text-crap-blue hover:text-crap-blue-dark font-semibold"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to News
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 