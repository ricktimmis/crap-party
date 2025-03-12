import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function JusticePolicy() {
  return (
    <div className="min-h-screen bg-crap-off-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-crap-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-crap-blue/10 rounded-full p-4 flex items-center justify-center">
              <Image
                src="/images/home/justice.svg"
                alt="Justice System"
                width={48}
                height={48}
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-center text-crap-blue mb-8">
            Justice System Reform
          </h1>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-crap-blue mb-4">Overview</h2>
              <p className="text-lg text-crap-gray-900">
                Our vision is a justice system that prioritizes personal responsibility, community contribution, and rehabilitation. We will empower individuals to take control of their lives while ensuring accountability for their actions. This will lead to safer communities and a more just society for all.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-crap-blue mb-6">Key Tenets</h2>
              <div className="grid grid-cols-1 gap-8">
                <div className="bg-crap-off-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-crap-blue mb-3">Accountability Through Action</h3>
                  <p className="text-crap-gray-900">
                    We will reform our justice system to emphasize personal responsibility and community contribution. Prison sentences will include mandatory work on social impact projects, giving offenders a chance to make amends and learn the value of their contribution to society.
                  </p>
                </div>

                <div className="bg-crap-off-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-crap-blue mb-3">Restorative Justice</h3>
                  <p className="text-crap-gray-900">
                    We believe in giving people a second chance. Our penal system will shift from punishment to rehabilitation through meaningful work. Offenders will participate in community projects, directly contributing to the well-being of their communities and building a sense of purpose.
                  </p>
                </div>

                <div className="bg-crap-off-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-crap-blue mb-3">A Hand Up, Not a Handout</h3>
                  <p className="text-crap-gray-900">
                    We will transform our justice system to empower individuals to take control of their lives. Prison sentences will include opportunities for education, job training, and community service, equipping offenders with the tools they need to succeed upon release.
                  </p>
                </div>

                <div className="bg-crap-off-white rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-crap-blue mb-3">Safer Communities Through Second Chances</h3>
                  <p className="text-crap-gray-900">
                    We will invest in programs that address the root causes of crime and provide support for offenders to reintegrate into society. This will include access to mental health services, addiction treatment, and housing assistance.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-crap-blue mb-4">Key Principles</h2>
              <ul className="list-disc list-inside text-lg text-crap-gray-900 space-y-4">
                <li>Focus on rehabilitation and reintegration</li>
                <li>Swift and proportionate justice</li>
                <li>Emphasis on personal responsibility</li>
                <li>Support for victims of crime</li>
                <li>Prevention through education</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-crap-blue mb-4">Reform Measures</h2>
              <div className="text-lg text-crap-gray-900 space-y-4">
                <p>Our justice reform includes:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Modernization of court processes</li>
                  <li>Enhanced rehabilitation programs</li>
                  <li>Community justice initiatives</li>
                  <li>Victim support services</li>
                  <li>Police reform and training</li>
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