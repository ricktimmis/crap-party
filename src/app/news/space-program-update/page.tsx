import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SpaceProgramArticle() {
  return (
    <div className="min-h-screen bg-crap-off-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-crap-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-crap-blue/10 rounded-full p-4 flex items-center justify-center">
              <Image
                src="/images/news/space.svg"
                alt="Space Program"
                width={48}
                height={48}
              />
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-crap-blue mb-4">
              Space Program Development Update
            </h1>
            <p className="text-crap-gray-600">March 10, 2024</p>
          </div>

          <div className="space-y-6 text-lg text-crap-gray-900">
            <p className="font-semibold text-xl">
              The UK will become a leader in space exploration and resource utilization.
            </p>

            <div className="bg-crap-off-white rounded-xl p-6 space-y-4">
              <h2 className="text-2xl font-bold text-crap-blue mb-4">Key Initiatives:</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-crap-blue pl-4">
                  <h3 className="font-semibold mb-2">Spaceport Development</h3>
                  <p>Establish the UK as a premier location for spaceports and related infrastructure, with targeted investments and tax incentives.</p>
                </div>

                <div className="border-l-4 border-crap-blue pl-4">
                  <h3 className="font-semibold mb-2">Regulatory Reform</h3>
                  <p>Streamline regulations and licensing for space-related activities, attracting companies like SpaceX.</p>
                </div>

                <div className="border-l-4 border-crap-blue pl-4">
                  <h3 className="font-semibold mb-2">Advanced Technology Research</h3>
                  <p>Invest in research and development of advanced space technologies, including robotics, 3D printing, and sustainable propulsion systems like Reaction Engines' SABRE.</p>
                </div>

                <div className="border-l-4 border-crap-blue pl-4">
                  <h3 className="font-semibold mb-2">Resource Utilization</h3>
                  <p>Support private sector initiatives for asteroid mining, lunar resource extraction, and the collection of space-based resources like solar wind hydrogen.</p>
                </div>

                <div className="border-l-4 border-crap-blue pl-4">
                  <h3 className="font-semibold mb-2">International Collaboration</h3>
                  <p>Develop international partnerships to ensure responsible and sustainable practices in space resource utilization.</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-bold text-crap-blue mb-4">Economic Impact</h2>
              <p>
                These initiatives will position the UK at the forefront of the growing space economy, creating high-skilled jobs, driving technological innovation, and establishing new revenue streams through space resource utilization. Our commitment to sustainable practices and international cooperation ensures that these developments will benefit both the UK and the global community.
              </p>
            </div>

            <div className="bg-crap-blue/5 rounded-xl p-6 mt-8">
              <h2 className="text-2xl font-bold text-crap-blue mb-4">Next Steps</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Initial spaceport development planning and site selection</li>
                <li>Formation of regulatory reform committee</li>
                <li>Establishment of research partnerships with universities and private sector</li>
                <li>Development of international cooperation frameworks</li>
                <li>Creation of space resource utilization guidelines</li>
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