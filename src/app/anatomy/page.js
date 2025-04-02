import InteractiveAnimation from '@/components/InteractiveAnimation';
import { BookOpenIcon, BeakerIcon, LightBulbIcon } from '@heroicons/react/24/outline';

export default function AnatomyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* 标题部分 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            Interactive Digestive System Explorer
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the fascinating journey of food through the human body with our 2D interactive model
          </p>
        </div>

        {/* 主内容区 */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-8">
          {/* 交互组件 */}
          <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 border border-gray-100 hover:shadow-2xl transition-shadow">
            <InteractiveAnimation />
          </div>

          {/* 侧边栏 */}
          <div className="space-y-8">
            {/* 学习目标卡片 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <LightBulbIcon className="w-6 h-6 text-yellow-500" />
                Learning Journey
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                  <BookOpenIcon className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Digestive Pathway</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Track food movement from ingestion to excretion
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
                  <BeakerIcon className="w-5 h-5 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Enzyme Functions</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Explore biochemical breakdown processes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 快速指南 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Guide</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Click organs for detailed info
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  Hover over labels for highlights
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Scroll to zoom the model
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 知识扩展区 */}
        <section className="mt-16 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Deepen Your Knowledge</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Terminology</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Peristalsis: Muscular contractions</li>
                <li>• Chyme: Partially digested food</li>
                <li>• Villi: Nutrient absorption sites</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Did You Know?</h3>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p className="text-gray-600">
                The small intestine&apos;s surface area equals a tennis court when unfolded!
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}