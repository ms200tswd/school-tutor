// components/Footer.jsx
import { GlobeAltIcon, CodeBracketIcon, EnvelopeIcon } from '@heroicons/react/20/solid'; // 使用更小的图标

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-gray-300 mt-12">
      <div className="container mx-auto px-4 py-8"> {/* 减少垂直padding */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6"> {/* 缩小间隙 */}
          {/* 作者信息 */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-white flex items-center gap-2"> {/* 缩小标题 */}
              <CodeBracketIcon className="w-6 h-6 text-blue-400" /> {/* 缩小图标 */}
              <span>Leo & Zhan & Sophie</span>
            </h3>
            <p className="text-xs opacity-80 mt-2"> {/* 缩小文字 */}
              Building interactive educational tools
            </p>
          </div>

          {/* 联系方式 */}
          <div className="space-y-3"> {/* 缩小间距 */}
            <h4 className="text-base font-semibold text-white">Contact</h4>
            <div className="flex flex-col items-center md:items-start gap-2"> {/* 缩小间隙 */}
              <a 
                href="https://github.com/ms200tswd" 
                className="flex items-center gap-1.5 text-sm hover:text-blue-400 transition-colors" // 缩小文字和间隙
              >
                <GlobeAltIcon className="w-4 h-4" /> {/* 更小图标 */}
                GitHub
              </a>
              <a 
                href="mailto:ms200tswd@gmail.com" 
                className="flex items-center gap-1.5 text-sm hover:text-blue-400 transition-colors"
              >
                <EnvelopeIcon className="w-4 h-4" />
                Email
              </a>
            </div>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="border-t border-white/10 mt-6 pt-4 text-center"> {/* 缩小间距 */}
          <p className="text-xs opacity-75">
            &copy; {currentYear} Leo
            <span className="mx-1.5">|</span>
                Built with ❤️ using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}


