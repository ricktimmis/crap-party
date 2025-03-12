'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const keyPolicies = [
    {
      title: 'Freeport Economy',
      description: 'Transform Britain into a nationwide freeport, eliminating trade barriers.',
      icon: '/images/home/freeport.svg',
      slug: 'freeport'
    },
    {
      title: 'Space Exploration',
      description: 'Lead the world in space resource gathering and colonization.',
      icon: '/images/home/space.svg',
      slug: 'space'
    },
    {
      title: 'Civil Service Reform',
      description: 'Revolutionize public service with community-driven initiatives.',
      icon: '/images/home/reform.svg',
      slug: 'reform'
    },
    {
      title: 'Justice System',
      description: 'Build a justice system focused on personal responsibility.',
      icon: '/images/home/justice.svg',
      slug: 'justice'
    },
  ];

  const additionalPolicies = [
    {
      title: 'Welfare',
      description: 'Create a fair and sustainable welfare system that empowers citizens.',
      icon: '/images/home/welfare.svg',
      slug: 'welfare'
    },
    {
      title: 'Education',
      description: 'Revolutionize learning with innovative and accessible education for all.',
      icon: '/images/home/education.svg',
      slug: 'education'
    },
    {
      title: 'Healthcare',
      description: 'Build a modern healthcare system focused on prevention and innovation.',
      icon: '/images/home/healthcare.svg',
      slug: 'healthcare'
    },
    {
      title: 'Defence',
      description: 'Strengthen national security through advanced technology and strategy.',
      icon: '/images/home/defence.svg',
      slug: 'defence'
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/home/hero-bg.svg"
            alt="CRAP Party Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">
              Building a Better Britain
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
              The CRAP Party is committed to transforming the United Kingdom through radical policy changes and innovative solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/manifesto"
                className="bg-crap-red hover:bg-crap-red-dark text-white px-8 py-3 rounded-md text-lg font-bold transition-all shadow-lg hover:shadow-xl border-2 border-transparent hover:border-white"
              >
                Read Our Manifesto
              </Link>
              <Link
                href="/membership"
                className="bg-crap-red hover:bg-crap-red-dark text-white px-8 py-3 rounded-md text-lg font-bold transition-all shadow-lg hover:shadow-xl border-2 border-transparent hover:border-white"
              >
                Join the Movement
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Key Policies Section */}
      <div className="py-24 bg-crap-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-crap-blue mb-16">
            Our Key Policies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyPolicies.map((policy) => (
              <Link
                key={policy.title}
                href={`/policies/${policy.slug}`}
                className="bg-crap-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all border border-crap-gray-200 group"
              >
                <div className="w-16 h-16 mb-6 mx-auto bg-crap-blue/10 rounded-full p-3 flex items-center justify-center group-hover:bg-crap-blue/20 transition-colors">
                  <Image
                    src={policy.icon}
                    alt={policy.title}
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="text-xl font-bold text-crap-blue mb-2 text-center group-hover:text-crap-blue-dark transition-colors">
                  {policy.title}
                </h3>
                <p className="text-crap-gray-900 text-center font-medium">
                  {policy.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-crap-red text-crap-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Change?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the CRAP Party today and help us build a better Britain for everyone. Together, we can transform our nation's future.
          </p>
          <Link
            href="/membership"
            className="bg-crap-white text-crap-red hover:bg-crap-off-white px-8 py-3 rounded-md text-lg font-bold transition-all shadow-lg hover:shadow-xl border-2 border-transparent hover:border-white"
          >
            Become a Member
          </Link>
        </div>
      </div>

      {/* Additional Policies Section */}
      <div className="py-24 bg-crap-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-crap-blue mb-16">
            More Key Policies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalPolicies.map((policy) => (
              <Link
                key={policy.title}
                href={`/policies/${policy.slug}`}
                className="bg-crap-off-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all border border-crap-gray-200 group"
              >
                <div className="w-16 h-16 mb-6 mx-auto bg-crap-blue/10 rounded-full p-3 flex items-center justify-center group-hover:bg-crap-blue/20 transition-colors">
                  <Image
                    src={policy.icon}
                    alt={policy.title}
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="text-xl font-bold text-crap-blue mb-2 text-center group-hover:text-crap-blue-dark transition-colors">
                  {policy.title}
                </h3>
                <p className="text-crap-gray-900 text-center font-medium">
                  {policy.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Updates Section */}
      <div className="py-24 bg-crap-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-crap-blue mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-crap-gray-900 font-medium">
              Follow our progress and join the conversation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/news"
              className="bg-crap-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center border border-crap-gray-200"
            >
              <h3 className="text-xl font-bold text-crap-blue mb-2">Latest News</h3>
              <p className="text-crap-gray-900 font-medium">
                Stay informed about our latest initiatives and achievements
              </p>
            </Link>
            <Link
              href="/contact"
              className="bg-crap-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center border border-crap-gray-200"
            >
              <h3 className="text-xl font-bold text-crap-blue mb-2">Get in Touch</h3>
              <p className="text-crap-gray-900 font-medium">
                Contact us to learn more about our mission and how you can help
              </p>
            </Link>
            <Link
              href="/about"
              className="bg-crap-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center border border-crap-gray-200"
            >
              <h3 className="text-xl font-bold text-crap-blue mb-2">About Us</h3>
              <p className="text-crap-gray-900 font-medium">
                Learn about our history and the team behind the CRAP Party
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
