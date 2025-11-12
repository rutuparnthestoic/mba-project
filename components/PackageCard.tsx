import Image from 'next/image';
import React from 'react';

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

interface PackageCardProps {
  package: Package;
  onExplore: (packageId: number) => void;
}

const PackageCard: React.FC<PackageCardProps> = ({ package: pkg, onExplore }) => {
  return (
    <div className="bg-stone-50 rounded-2xl overflow-hidden shadow-lg max-w-2xl mx-auto">
      <img
        src={pkg.image}
        alt={pkg.title}
        className="w-full h-80 object-cover"
      />
      <div className="p-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-3">
          {pkg.title}
        </h3>
        <p className="text-lg text-gray-600 mb-2">
          {pkg.duration}
        </p>
        <div className="mb-4">
          <p className="text-gray-700 mb-1">
            <span className="font-medium">Theme:</span> {pkg.theme}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-medium">Budget:</span> {pkg.budget}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Stay:</span> {pkg.stay}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <button 
            onClick={() => onExplore(pkg.id)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full transition-colors font-medium"
          >
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;