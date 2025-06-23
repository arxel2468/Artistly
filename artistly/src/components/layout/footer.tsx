
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Artistly</h3>
            <p className="text-gray-600">
              Connecting event planners with talented performers since 2025.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">For Artists</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/onboarding" className="text-gray-600 hover:text-gray-900">
                  Join as Artist
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">For Event Planners</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/artists" className="text-gray-600 hover:text-gray-900">
                  Find Artists
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Booking Process
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Event Tips
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">
                support@artistly.com
              </li>
              <li className="text-gray-600">
                +91 123 456 7890
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-gray-600">
          <p>© 2025 Artistly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
