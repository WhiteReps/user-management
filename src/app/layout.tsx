import Link from 'next/link';
import { Toaster } from 'react-hot-toast';
import './globals.css'
import {FavoritesStorageProvider} from "@/providers/FavoritesStorageProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className='overflow-auto'>
        <Toaster />
        <nav className="bg-gray-800 p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <Link
                href="/"
                className="text-white text-lg font-semibold hover:text-gray-300 transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/favorites"
                className="text-white text-lg font-semibold hover:text-gray-300 transition-colors duration-200"
              >
                Favorites
              </Link>
            </div>
            {/* Optional: Add a logo or additional links */}
            <div className="flex items-center space-x-4">
              <span className="text-white text-lg font-semibold">My App</span>
            </div>
          </div>
        </nav>
        <FavoritesStorageProvider>
          {children}
        </FavoritesStorageProvider>
      </body>
    </html>
  );
}