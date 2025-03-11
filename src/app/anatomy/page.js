import InteractiveAnimation from '@/components/InteractiveAnimation';

export default function AnatomyPage() {
  return (
    <main className="container mx-auto p-4 lg:p-8">
      {/* 页面标题 */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-gray-800">
        消化系统互动教学
      </h1>

      {/* 核心交互组件 */}
      <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
        <InteractiveAnimation />
      </div>

      {/* 补充说明区块 */}
      <section className="mt-8 prose max-w-3xl">
        <h2 className="text-2xl font-semibold text-gray-700">学习目标</h2>
        <ul className="list-disc pl-6 mt-4 text-gray-600">
          <li>理解食物在消化系统的移动路径</li>
          <li>识别主要消化器官的功能</li>
          <li>掌握消化酶的分泌位置和作用</li>
        </ul>
      </section>
    </main>
  );
}