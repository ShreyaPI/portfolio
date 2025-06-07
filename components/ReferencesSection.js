"use client";

import { useState } from 'react';

export default function ReferencesSection({ references }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
      >
        <h2 className="text-2xl font-bold text-gray-900">References</h2>
        <svg
          className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      
      {isOpen && (
        <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
          <ul className="list-decimal list-inside space-y-2 text-gray-700">
            {references.map((reference, index) => (
              <li key={index}>{reference}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
} 