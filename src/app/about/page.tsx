'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
  };
}

export default function About() {
  const teamMembers: TeamMember[] = [
    {
      name: 'Elizabeth Blackwood',
      role: 'Party Leader',
      bio: 'A visionary leader with 20 years of experience in economic policy and international trade.',
      image: '/images/team/leader.svg',
      socialLinks: {
        twitter: 'https://twitter.com/ElizabethBlackwood',
        linkedin: 'https://linkedin.com/in/elizabeth-blackwood',
      },
    },
    {
      name: 'James Mitchell',
      role: 'Head of Policy',
      bio: 'Former space industry executive bringing expertise in technology and innovation.',
      image: '/images/team/policy-head.svg',
      socialLinks: {
        twitter: 'https://twitter.com/JamesMitchell',
      },
    },
    {
      name: 'Sarah Chen',
      role: 'Community Relations Director',
      bio: 'Dedicated to transforming public service through community-driven initiatives.',
      image: '/images/team/community.svg',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/sarah-chen',
      },
    },
    {
      name: 'Marcus Thompson',
      role: 'Justice Reform Coordinator',
      bio: 'Legal expert focused on implementing innovative approaches to justice and rehabilitation.',
      image: '/images/team/justice.svg',
      socialLinks: {
        twitter: 'https://twitter.com/MarcusThompson',
        linkedin: 'https://linkedin.com/in/marcus-thompson',
      },
    },
  ];

  return (
    <div className="min-h-screen bg-crap-off-white">
      {/* Hero Section */}
      <div className="relative bg-crap-blue text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/home/hero-bg.svg"
            alt="CRAP Party Background"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">
            About the CRAP Party
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            Founded on the principles of radical change and innovative solutions, we're working to build a better Britain for all.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-crap-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-crap-blue mb-8">Our Mission</h2>
                <p className="text-lg text-crap-gray-900 mb-8">
                  The CRAP Party is committed to transforming the United Kingdom through bold, innovative policies that address the challenges of the 21st century. We believe in:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-crap-red/10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-crap-red">•</span>
                    </div>
                    <span className="text-crap-gray-900">Creating a dynamic, barrier-free economy through nationwide freeport status</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-crap-red/10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-crap-red">•</span>
                    </div>
                    <span className="text-crap-gray-900">Investing in space exploration and resource gathering for future generations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-crap-red/10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-crap-red">•</span>
                    </div>
                    <span className="text-crap-gray-900">Reinventing public service with a focus on community-driven projects</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 bg-crap-red/10 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-crap-red">•</span>
                    </div>
                    <span className="text-crap-gray-900">Building a justice system centered on personal responsibility and community contribution</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-96">
                <Image
                  src="/images/about/mission.svg"
                  alt="CRAP Party Mission"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="py-24 bg-crap-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-crap-blue mb-16 text-center">Our History</h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-8 bg-crap-off-white rounded-2xl p-8 shadow-lg">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold text-crap-blue mb-2">2023</h3>
                <p className="text-crap-gray-900 font-semibold">
                  Founded by a group of visionary leaders committed to radical change
                </p>
              </div>
              <div className="md:w-2/3">
                <p className="text-crap-gray-900">
                  The CRAP Party emerged from a growing recognition that traditional approaches to governance were insufficient for addressing the challenges of the modern world. Our founders came together with a shared vision of transforming Britain through innovative solutions and bold policy initiatives.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-8 bg-crap-off-white rounded-2xl p-8 shadow-lg">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold text-crap-blue mb-2">2024</h3>
                <p className="text-crap-gray-900 font-semibold">
                  Rapid growth and policy development
                </p>
              </div>
              <div className="md:w-2/3">
                <p className="text-crap-gray-900">
                  Within our first year, we've developed comprehensive policies for economic reform, space exploration, civil service transformation, and justice system overhaul. Our membership has grown rapidly as more people embrace our vision for change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 bg-crap-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-crap-blue mb-16 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-crap-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow">
                <div className="aspect-w-1 aspect-h-1 bg-crap-blue/10 p-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-crap-blue mb-1 group-hover:text-crap-blue-dark transition-colors">{member.name}</h3>
                  <p className="text-crap-red font-medium mb-4">{member.role}</p>
                  <p className="text-crap-gray-900 mb-6">{member.bio}</p>
                  <div className="flex space-x-4">
                    {member.socialLinks.twitter && (
                      <a
                        href={member.socialLinks.twitter}
                        className="text-crap-blue hover:text-crap-blue-dark transition-colors font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Twitter
                      </a>
                    )}
                    {member.socialLinks.linkedin && (
                      <a
                        href={member.socialLinks.linkedin}
                        className="text-crap-blue hover:text-crap-blue-dark transition-colors font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Us Section */}
      <div className="bg-crap-red text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Movement</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of the change. Join the CRAP Party today and help us build a better Britain for everyone.
          </p>
          <Link
            href="/membership"
            className="bg-crap-white text-crap-red hover:bg-crap-off-white px-8 py-3 rounded-md text-lg font-bold transition-all shadow-lg hover:shadow-xl border-2 border-transparent hover:border-white"
          >
            Become a Member
          </Link>
        </div>
      </div>
    </div>
  );
} 