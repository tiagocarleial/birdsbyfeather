'use client';

import { useState } from 'react';

interface FilterBarProps {
  species: string[];
  selectedSpecies: string;
  onFilterChange: (species: string) => void;
}

export default function FilterBar({ species, selectedSpecies, onFilterChange }: FilterBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8">
      {/* Desktop Filter */}
      <div className="hidden md:flex items-center gap-3 flex-wrap">
        <span className="text-gray-400 font-medium">Filter by Species:</span>
        <button
          onClick={() => onFilterChange('all')}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${
            selectedSpecies === 'all'
              ? 'bg-green-600 text-white shadow-lg shadow-green-600/20'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700'
          }`}
        >
          <i className="fa-solid fa-globe mr-2"></i>
          All Birds
        </button>
        {species.map((sp) => (
          <button
            key={sp}
            onClick={() => onFilterChange(sp)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedSpecies === sp
                ? 'bg-green-600 text-white shadow-lg shadow-green-600/20'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700'
            }`}
          >
            {sp === 'Bald Eagle' && <i className="fa-solid fa-dove mr-2"></i>}
            {sp === 'White-tailed Eagle' && <i className="fa-solid fa-dove mr-2"></i>}
            {sp === 'Blue Tit' && <i className="fa-solid fa-feather-pointed mr-2"></i>}
            {sp === 'Common Kestrel' && <i className="fa-solid fa-crow mr-2"></i>}
            {sp === 'Osprey' && <i className="fa-solid fa-fish mr-2"></i>}
            {sp === 'White Stork' && <i className="fa-solid fa-egg mr-2"></i>}
            {sp === 'Peregrine Falcon' && <i className="fa-solid fa-jet-fighter mr-2"></i>}
            {sp === 'Various Birds' && <i className="fa-solid fa-birds mr-2"></i>}
            {sp === 'Multi-Camera' && <i className="fa-solid fa-camera mr-2"></i>}
            {!['Bald Eagle', 'White-tailed Eagle', 'Blue Tit', 'Common Kestrel', 'Osprey', 'White Stork', 'Peregrine Falcon', 'Various Birds', 'Multi-Camera'].includes(sp) && <i className="fa-solid fa-feather mr-2"></i>}
            {sp}
          </button>
        ))}
      </div>

      {/* Mobile Filter Dropdown */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white font-medium flex items-center justify-between"
        >
          <span>
            <i className="fa-solid fa-filter mr-2"></i>
            {selectedSpecies === 'all' ? 'All Birds' : selectedSpecies}
          </span>
          <i className={`fa-solid fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
        </button>

        {isOpen && (
          <div className="mt-2 bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => {
                onFilterChange('all');
                setIsOpen(false);
              }}
              className={`w-full px-4 py-3 text-left transition-colors ${
                selectedSpecies === 'all'
                  ? 'bg-green-600 text-white'
                  : 'text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <i className="fa-solid fa-globe mr-2"></i>
              All Birds
            </button>
            {species.map((sp) => (
              <button
                key={sp}
                onClick={() => {
                  onFilterChange(sp);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-3 text-left transition-colors border-t border-gray-700 ${
                  selectedSpecies === sp
                    ? 'bg-green-600 text-white'
                    : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {sp === 'Bald Eagle' && <i className="fa-solid fa-dove mr-2"></i>}
                {sp === 'White-tailed Eagle' && <i className="fa-solid fa-dove mr-2"></i>}
                {sp === 'Blue Tit' && <i className="fa-solid fa-feather-pointed mr-2"></i>}
                {sp === 'Common Kestrel' && <i className="fa-solid fa-crow mr-2"></i>}
                {sp === 'Osprey' && <i className="fa-solid fa-fish mr-2"></i>}
                {sp === 'White Stork' && <i className="fa-solid fa-egg mr-2"></i>}
                {sp === 'Peregrine Falcon' && <i className="fa-solid fa-jet-fighter mr-2"></i>}
                {sp === 'Various Birds' && <i className="fa-solid fa-birds mr-2"></i>}
                {sp === 'Multi-Camera' && <i className="fa-solid fa-camera mr-2"></i>}
                {!['Bald Eagle', 'White-tailed Eagle', 'Blue Tit', 'Common Kestrel', 'Osprey', 'White Stork', 'Peregrine Falcon', 'Various Birds', 'Multi-Camera'].includes(sp) && <i className="fa-solid fa-feather mr-2"></i>}
                {sp}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
