import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  image: string;
  slug: string;
}

export default function News() {
  const newsItems: NewsItem[] = [
    {
      id: '5',
      title: "Streamlining, Accelerating, and Democratizing Governance",
      date: "March 12, 2025",
      summary: "CRAP Party unveils revolutionary digital platform to transform MP-constituent engagement and restore true democracy through technology.",
      image: "/images/news/reform.svg",
      slug: "civil-service-reform-update"
    },
    {
      id: '1',
      title: "Agricultural Innovation Co-op Proposal",
      date: "March 20, 2024",
      summary: "CRAP Party unveils plans for farmer-owned agricultural innovation co-op to drive technological advancement and sustainability in farming.",
      image: "/images/news/agriculture.svg",
      slug: "agricultural-innovation-proposal"
    },
    {
      id: '2',
      title: "CRAP Party Launches New Economic Vision",
      date: "March 15, 2024",
      summary: "Unveiling our comprehensive plan for transforming Britain into a nationwide freeport.",
      image: "/images/news/economy.svg",
      slug: "economic-vision-launch"
    },
    {
      id: '3',
      title: "Space Program Development Update",
      date: "March 10, 2024",
      summary: "Progress report on our initiatives for space resource gathering and colonization efforts.",
      image: "/images/news/space.svg",
      slug: "space-program-update"
    },
    {
      id: '4',
      title: "Civil Service Reform Progress",
      date: "March 5, 2024",
      summary: "Updates on our community-driven initiatives to revolutionize public service.",
      image: "/images/news/reform.svg",
      slug: "civil-service-reform-update"
    }
  ];

  return (
    <div className="min-h-screen bg-crap-off-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-crap-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-crap-blue mb-12">
            Latest News
          </h1>

          <div className="space-y-8">
            {newsItems.map((item) => (
              <Link 
                key={item.id}
                href={`/news/${item.slug}`}
                className="block bg-crap-off-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-1/4">
                    <div className="bg-crap-blue/5 rounded-lg p-3 group-hover:bg-crap-blue/10 transition-colors flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-3/4">
                    <h2 className="text-2xl font-bold text-crap-blue mb-2 group-hover:text-crap-blue-dark transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-crap-gray-600 mb-2">{item.date}</p>
                    <p className="text-crap-gray-900">{item.summary}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

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
  );
} 