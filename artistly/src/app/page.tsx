'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/theme-context";
import { useEffect, useState } from 'react';

// Demonstrate use of getStaticProps equivalent in App Router
// In a real app, this would be in a separate file and use proper data fetching
async function getCategories() {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return [
    { name: 'Singers', color: 'bg-pink-100', gradient: 'from-pink-400 to-purple-500' },
    { name: 'Dancers', color: 'bg-blue-100', gradient: 'from-blue-400 to-cyan-500' },
    { name: 'Speakers', color: 'bg-yellow-100', gradient: 'from-yellow-400 to-orange-500' },
    { name: 'DJs', color: 'bg-purple-100', gradient: 'from-purple-400 to-indigo-500' },
  ];
}

export default function Home() {
  const { theme } = useTheme();
  const [categories, setCategories] = useState<any[]>([]);
  
  // Demonstrate useEffect for data fetching
  useEffect(() => {
    // Fetch categories
    getCategories().then(data => {
      setCategories(data);
    });
    
    // Add a comment to the console to show data fetching
    console.log('Home page mounted - fetching categories');
    
    return () => {
      console.log('Home page unmounted');
    };
  }, []);

  // Determine gradient based on theme
  const heroGradient = theme === 'artistic' 
    ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500' 
    : 'bg-gradient-to-r from-indigo-500 to-purple-600';

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className={`${heroGradient} text-white py-20`}>
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Find the Perfect Artist for Your Event</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Connect with top performers for any occasion - weddings, corporate events, parties, and more.</p>
          <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            <Link href="/artists">Explore Artists</Link>
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className={`py-16 container mx-auto px-4 ${theme === 'artistic' ? 'bg-gradient-to-b from-white to-purple-50' : ''}`}>
        <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              href={`/artists?category=${category.name}`} 
              key={category.name}
              className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition h-48"
            >
              {theme === 'artistic' ? (
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient}`}></div>
              ) : (
                <div className={`absolute inset-0 ${category.color}`}></div>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition">
                <h3 className="text-white text-2xl font-bold">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Rest of the homepage content... */}
      {/* ... */}
    </div>
  );
}
