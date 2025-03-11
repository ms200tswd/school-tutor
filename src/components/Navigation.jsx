import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-bold text-blue-600">
            生物学习系统
          </Link>
          <div >
            <Link href="/anatomy" className="px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
                消化系统
            </Link>
            <Link href="/biology" className="px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors">
              生物学
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}