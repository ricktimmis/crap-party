import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CivilServiceReformArticle() {
  return (
    <div className="min-h-screen bg-crap-off-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-crap-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center justify-center mb-8">
            <div className="w-20 h-20 bg-crap-blue/10 rounded-full p-4 flex items-center justify-center">
              <Image
                src="/images/news/reform.svg"
                alt="Civil Service Reform"
                width={48}
                height={48}
              />
            </div>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-crap-blue mb-4">
              Streamlining, Accelerating, and Democratizing Governance
            </h1>
            <p className="text-crap-gray-600">March 12, 2025</p>
          </div>

          <div className="space-y-8 text-lg text-crap-gray-900">
            <div className="bg-crap-blue/5 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-crap-blue mb-4">The Problem</h2>
              <p>
                Today, government operates at a snail's pace, taking far too long to move forward and equally as long to reverse course. Governance processes are often arcane, shrouded in tradition, and frustratingly removed from the very people they are intended to serve. The labyrinth of bureaucratic procedures and the sheer inertia of established systems hinder progress and stifle innovation. Furthermore, the rigid grouping and whipping of MPs into political parties, designed to manipulate the "Ayes" and "Noes" of Parliament, stand in stark contrast to the original vision of a truly representative democracy. Citizens are left feeling unheard, their voices lost in the cacophony of political maneuvering.
              </p>
            </div>

            <div className="border-l-4 border-crap-blue pl-6">
              <h2 className="text-2xl font-bold text-crap-blue mb-4">Citizens' Requirements</h2>
              <p>
                As a UK citizen, I expect the government to work for me, to act on my behalf, to genuinely consider my views, and to incorporate them into the decision-making process. I want to be informed about the decisions that directly impact my life, and I demand that my perspective be recorded and given due consideration. In a digital age, this shouldn't be a radical request, but a fundamental right.
              </p>
            </div>

            <div className="bg-crap-off-white rounded-xl p-6">
              <h2 className="text-2xl font-bold text-crap-blue mb-4">Our Solution</h2>
              <p>
                The CRAP Party proposes a revolutionary approach to governance by harnessing the power of technology to bridge the gap between MPs and their constituents. We will develop and deploy a user-friendly digital platform that empowers every MP to directly brief their constituents on upcoming parliamentary votes and policy proposals. This platform will facilitate real-time polling, allowing citizens to express their views on critical issues. These polls will be a matter of public record, along with the subsequent vote undertaken by the MP in Parliament. This transparency will create an unprecedented level of accountability and ensure that citizens' voices are heard.
              </p>
            </div>

            <div className="border-l-4 border-crap-blue pl-6">
              <h2 className="text-2xl font-bold text-crap-blue mb-4">Expected Results</h2>
              <p>
                The implementation of this digital platform will yield a wealth of valuable data, which we will make publicly accessible. Simple analysis of this data will transparently and seamlessly demonstrate the alignment, or misalignment, of each Member of Parliament with the views of their constituents. This level of transparency will foster trust and accountability, empowering citizens to hold their representatives responsible for their actions.
              </p>
            </div>

            <div className="bg-crap-off-white rounded-xl p-6">
              <h2 className="text-2xl font-bold text-crap-blue mb-4">Implementation</h2>
              <p>
                Unlike the current UK government, the CRAP Party is inherently technology-savvy. We possess the people, skills, and capacity to build a functional first version of such an app within days. We understand the power of agile development and rapid prototyping, and we are committed to delivering tangible solutions that address the real needs of our citizens. This project is not just about technology; it's about restoring faith in our democratic institutions and empowering citizens to actively participate in shaping their future. We will bring the power of technology to empower the power of the people.
              </p>
            </div>

            <div className="bg-crap-blue/10 rounded-xl p-6">
              <h2 className="text-2xl font-bold text-crap-blue mb-4">Proof of Capability</h2>
              <p>
                You might be skeptical. You might think these ideas are too ambitious, too futuristic. But we've already proven what's possible. From the initial ideation to the comprehensive manifesto and policy definitions spanning the entire spectrum of UK government responsibilities, the CRAP Party developed and delivered our platform with the help of agentic AI in just two days. And this very website, crap-party.org.uk, from its conception to its first version release, took less than eight hours. We're not just talking about change; we're demonstrating it. We're proving that with the right tools and the right vision, government can be as agile, responsive, and transparent as the technology that powers our daily lives.
              </p>
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