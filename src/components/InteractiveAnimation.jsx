'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function InteractiveAnimation() {
  const [activeOrgan, setActiveOrgan] = useState(null);

  // 器官数据配置
  const organs = {
    stomach: {
      name: 'Stomach',
      description: 'The stomach secretes gastric acids and pepsin to break down food. Average capacity is approximately 1.5 liters. Peristalsis mixes food with digestive juices to form chyme.',
      position: { top: '52%', left: '38%' },
      color: 'bg-red-100'
    },
    intestine: {
      name: 'Small Intestine',
      description: 'Approximately 6 meters long, consisting of duodenum, jejunum, and ileum. Final nutrient absorption occurs through intestinal villi that dramatically increase surface area.',
      position: { top: '62%', left: '45%' },
      color: 'bg-yellow-100'
    }
  };

  // 弹窗动画配置
  const modalVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    },
    exit: { opacity: 0, y: 20 }
  };

  return (
    <div className="relative w-full min-h-[500px] bg-gray-50 border rounded-lg shadow-lg overflow-hidden">
      {/* 消化过程动画 */}
      <div className="absolute top-4 left-4 z-10">
        <Image
          src="/images/eating-animation.gif"
          width={320}
          height={240}
          alt="Digestive process animation"
          className="rounded-lg border"
          unoptimized
        />
      </div>

      {/* 交互式器官热区 */}
      {Object.entries(organs).map(([key, organ]) => (
        <motion.div
          key={key}
          className={`absolute w-14 h-14 rounded-full cursor-pointer ${organ.color} opacity-70 hover:opacity-100 transition-opacity`}
          style={{
            top: organ.position.top,
            left: organ.position.left
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveOrgan(key)}
        />
      ))}

      {/* 动态弹窗 */}
      <AnimatePresence>
        {activeOrgan && (
          <motion.div
            key="organ-modal"
            className="fixed inset-0 bg-black/30 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-xl max-w-md w-full overflow-hidden"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">
                  {organs[activeOrgan].name}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {organs[activeOrgan].description}
                </p>
                <div className="mt-6 flex justify-end">
                  <motion.button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveOrgan(null)}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 解剖图标注示例 */}
      <div className="absolute top-[45%] right-4 text-sm text-gray-600">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 bg-red-400 rounded-full" />
          <span>Arteries</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-400 rounded-full" />
          <span>Veins</span>
        </div>
      </div>
    </div>
  );
}