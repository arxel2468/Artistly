import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function Home() {
  const categories = [
    { name: 'Singers', color: 'bg-pink-100' },
    { name: 'Dancers', color: 'bg-blue-100' },
    { name: 'Speakers', color: 'bg-yellow-100' },
    { name: 'DJs', color: 'bg-purple-100' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Find the Perfect Artist for Your Event</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Connect with top performers for any occasion - weddings, corporate events, parties, and more.</p>
          <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
            <Link href="/artists">Explore Artists</Link>
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              href={`/artists?category=${category.name}`} 
              key={category.name}
              className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition h-48"
            >
              <div className={`absolute inset-0 ${category.color}`}></div>
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition">
                <h3 className="text-white text-2xl font-bold">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Artistly Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Browse Artists</h3>
              <p className="text-gray-600">Explore our diverse collection of talented performers for any event.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Request Quotes</h3>
              <p className="text-gray-600">Contact artists directly to discuss your event needs and pricing.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Book with Confidence</h3>
              <p className="text-gray-600">Secure your booking through our platform with peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Featured Artists</h2>
          <Button asChild variant="outline">
            <Link href="/artists">View All</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* This would typically come from your data, but we'll hardcode a few for the homepage */}
          {[1, 2, 3, 4].map((id) => (
            <div key={id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Featured Artist {id}</h3>
                <p className="text-gray-500 text-sm mb-2">Category • Location</p>
                <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/artists/${id}`}>View Profile</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Rahul Mehta</h4>
                  <p className="text-gray-500 text-sm">Event Planner</p>
                </div>
              </div>
              <p className="text-gray-600">"Found an amazing band for our corporate event. The booking process was seamless and the performance exceeded our expectations!"</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Neha Gupta</h4>
                  <p className="text-gray-500 text-sm">Wedding Planner</p>
                </div>
              </div>
              <p className="text-gray-600">"Artistly made it so easy to find the perfect singer for my client's wedding. The platform saved me hours of searching and negotiating."</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Vikram Singh</h4>
                  <p className="text-gray-500 text-sm">Artist</p>
                </div>
              </div>
              <p className="text-gray-600">"As a professional DJ, Artistly has connected me with quality clients and helped me grow my business. The platform is a game-changer!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Artist?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of event planners who have successfully booked artists through our platform.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
              <Link href="/artists">Find Artists</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-indigo-700">
              <Link href="/onboarding">Join as an Artist</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
