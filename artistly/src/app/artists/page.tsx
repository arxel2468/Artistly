'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ArtistCard from '@/components/artists/artist-card';
import FilterBar from '@/components/artists/filter-bar';
import artistsData from '@/data/artists.json';

export default function ArtistsPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  
  const [artists, setArtists] = useState(artistsData);
  const [filters, setFilters] = useState({
    category: initialCategory,
    location: '',
    priceRange: ''
  });

  // Apply filters when they change
  useEffect(() => {
    let filteredArtists = artistsData;
    
    if (filters.category) {
      filteredArtists = filteredArtists.filter(artist => 
        artist.category === filters.category
      );
    }
    
    if (filters.location) {
      filteredArtists = filteredArtists.filter(artist => 
        artist.location === filters.location
      );
    }
    
    if (filters.priceRange) {
      filteredArtists = filteredArtists.filter(artist => 
        artist.priceRange === filters.priceRange
      );
    }
    
    setArtists(filteredArtists);
  }, [filters]);

  // Get unique values for filter options
  const categories = [...new Set(artistsData.map(artist => artist.category))];
  const locations = [...new Set(artistsData.map(artist => artist.location))];
  const priceRanges = [...new Set(artistsData.map(artist => artist.priceRange))];

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Find Artists</h1>
      
      {/* Filters */}
      <FilterBar 
        categories={categories}
        locations={locations}
        priceRanges={priceRanges}
        onFilterChange={handleFilterChange}
        selectedFilters={filters}
      />
      
      {/* Artist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {artists.map(artist => (
          <ArtistCard 
            key={artist.id}
            id={artist.id}
            name={artist.name}
            category={artist.category}
            priceRange={artist.priceRange}
            location={artist.location}
            image={artist.image}
            bio={artist.bio}
          />
        ))}
      </div>
      
      {artists.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No artists found matching your filters.</p>
          <button 
            onClick={() => setFilters({ category: '', location: '', priceRange: '' })}
            className="mt-4 text-indigo-600 hover:text-indigo-800"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
