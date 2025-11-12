'use client';

import React, { useEffect } from 'react';
import { ArrowLeft, MapPin, Clock, Users, DollarSign, CheckCircle, Star } from 'lucide-react';
import Image from 'next/image';

interface Package {
  id: number;
  title: string;
  duration: string;
  theme: string;
  budget: string;
  stay: string;
  image: string;
  dayByDayPlan: Array<{
    day: number;
    title: string;
    activities: string[];
  }>;
  tripHighlights: string[];
  included: string[];
}

interface PackageDetailsProps {
  package: Package;
  onBack: () => void;
}

const PackageDetails: React.FC<PackageDetailsProps> = ({ package: pkg, onBack }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Sticky Back Button */}
      <button
        onClick={onBack}
        className="fixed top-6 left-6 z-50 flex items-center bg-white/95 hover:bg-white px-4 py-2 rounded-full text-gray-700 hover:text-emerald-600 transition-all shadow-lg backdrop-blur-sm"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Retreats
      </button>

      {/* Cover Image Section */}
      <div className="relative h-96 md:h-[500px]">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {pkg.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              {pkg.theme}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        
        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center mb-3">
              <Clock className="w-6 h-6 text-emerald-600 mr-3" />
              <span className="text-lg font-semibold text-gray-900">Duration</span>
            </div>
            <p className="text-gray-700 text-lg">{pkg.duration}</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center mb-3">
              <DollarSign className="w-6 h-6 text-emerald-600 mr-3" />
              <span className="text-lg font-semibold text-gray-900">Budget</span>
            </div>
            <p className="text-gray-700 text-lg">{pkg.budget}</p>
          </div>
        </div>

        {/* Accommodation */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <MapPin className="w-6 h-6 text-emerald-600 mr-3" />
            Accommodation
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">{pkg.stay}</p>
        </div>

        {/* Day by Day Plan */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Day by Day Journey
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-emerald-200"></div>
            
            {pkg.dayByDayPlan.map((day, index) => (
              <div key={day.day} className="relative flex items-start mb-8 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-6 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Content */}
                <div className="ml-12 md:ml-20 bg-stone-50 p-6 rounded-xl flex-1">
                  <div className="flex items-center mb-3">
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold mr-3">
                      Day {day.day}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">{day.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {day.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-start text-gray-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trip Highlights */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
            <Star className="w-8 h-8 text-emerald-600 mr-3" />
            Trip Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pkg.tripHighlights.map((highlight, index) => (
              <div key={index} className="flex items-start bg-stone-50 p-4 rounded-xl">
                <Star className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {pkg.included.map((item, index) => (
              <div key={index} className="flex items-start bg-stone-50 p-4 rounded-xl">
                <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Book Now Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 p-8 rounded-2xl shadow-lg text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Life?</h3>
          <p className="text-emerald-100 mb-6 text-lg">
            Join us on this incredible journey of self-discovery and spiritual growth.
          </p>
          <button className="bg-white text-emerald-600 hover:bg-stone-50 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg">
            Book This Retreat - {pkg.budget}
          </button>
          <p className="text-emerald-200 mt-4 text-sm">
            Secure your spot with flexible cancellation policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;