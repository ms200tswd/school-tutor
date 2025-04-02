import Link from 'next/link';
import { BookOpenIcon, HeartIcon, BeakerIcon, LightBulbIcon} from '@heroicons/react/24/outline';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-6">
          
          <Link href="/" className="text-xl font-bold text-blue-600 flex items-center gap-2">
            <BookOpenIcon className="w-6 h-6" />
              BioLearning
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link 
              href="/anatomy" 
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-500 transition-colors"
            >
              <BeakerIcon className="w-5 h-5" />
                Anatomy
            </Link>

            <Link
              href="/physiology"
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-500 transition-colors"
            >
              <HeartIcon className="w-5 h-5 text-red-500" />
                Mammals
            </Link>

            <Link
              href="/biology"
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-blue-500 transition-colors"
            >
              <LightBulbIcon className="w-5 h-5" />
                Biology
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}