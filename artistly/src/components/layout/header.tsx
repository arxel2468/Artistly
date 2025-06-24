'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/theme-context";
import { Moon, Sun, Palette } from "lucide-react"; // You'll need to install lucide-react

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className={`border-b ${theme === 'artistic' ? 'bg-gradient-to-r from-purple-50 to-pink-50' : ''}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className={`text-2xl font-bold ${theme === 'artistic' ? 'text-purple-600' : 'text-indigo-600'}`}>
          Artistly
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link href="/artists" className="text-gray-600 hover:text-gray-900">
            Find Artists
          </Link>
          <Link href="/onboarding" className="text-gray-600 hover:text-gray-900">
            List Your Services
          </Link>
          <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
            Dashboard
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <div className="flex space-x-1 mr-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setTheme('light')}
              className={theme === 'light' ? 'bg-gray-100' : ''}
            >
              <Sun className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setTheme('dark')}
              className={theme === 'dark' ? 'bg-gray-100' : ''}
            >
              <Moon className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setTheme('artistic')}
              className={theme === 'artistic' ? 'bg-gray-100' : ''}
            >
              <Palette className="h-5 w-5" />
            </Button>
          </div>
          <Button variant="outline" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button className={theme === 'artistic' ? 'bg-purple-600 hover:bg-purple-700' : ''}>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
