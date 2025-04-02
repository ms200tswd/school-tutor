'use client';
import { useState, useRef, useEffect } from 'react'; // 完整导入React Hooks
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

//GIF 原始尺寸
const GIF_WIDTH = 449;
const GIF_HEIGHT = 1363;
const GIF_ASPECT_RATIO = 449 / 1363;

export default function InteractiveAnimation() {
  const containerRef = useRef(null);
  const rightPanelRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [activeOrgan, setActiveOrgan] = useState(null);
  const [scaleFactor, setScaleFactor] = useState(1);

  // 根据容器尺寸计算缩放比例
  useEffect(() => {
    const updateHeight = () => {
      if (rightPanelRef.current && containerRef.current) {
        const rightHeight = rightPanelRef.current.offsetHeight;
        const maxHeight = window.innerHeight * 0.9;
        
        // 计算等比缩放后的高度
        const calculatedHeight = Math.min(
          rightHeight, 
          maxHeight,
          containerRef.current.offsetWidth / GIF_ASPECT_RATIO
        );

        setContainerHeight(calculatedHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  // 器官数据配置
  const organs = {
    stomach: {
      name: 'Stomach',
      description: 'The stomach secretes gastric acids and pepsin to break down food. Average capacity is approximately 1.5 liters. Peristalsis mixes food with digestive juices to form chyme.',
      position: { 
      x: 120,  // 必须包含x坐标
      y: 650   // 必须包含y坐标
      },
      color: 'bg-red-100/30'  
    },
    intestine: {
      name: 'Small Intestine',
      description: 'Approximately 6 meters long, consisting of duodenum, jejunum, and ileum. Final nutrient absorption occurs through intestinal villi that dramatically increase surface area.',
      position: { 
      x: 200, 
      y: 950 
      },
      color: 'bg-yellow-100/30'
    }
  };

  // 动态计算位置
  const calculatePosition = (organ) => ({
    left: `${(organ.originalX / GIF_WIDTH) * 100}%`,
    top: `${(organ.originalY / GIF_HEIGHT) * 100}%`,
    width: `${40 * scaleFactor}px`,  // 热区基础尺寸40px
    height: `${40 * scaleFactor}px`
  });

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
    <div className="flex flex-col md:flex-row min-h-screen p-4 gap-4">
      {/* 左侧图片容器 */}
      <div 
        ref={containerRef}
        className="w-full md:w-1/2 relative bg-gray-100 rounded-lg overflow-hidden"
        style={{ height: containerHeight }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/images/eating-animation.gif"
            fill
            alt="Digestive System"
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* 器官热区 */}
          {Object.entries(organs).map(([key, organ]) => (
            <motion.div
              key={key}
              className={`absolute w-8 h-8 cursor-pointer ${organ.color} rounded-full`}
              style={{
                left: `${(organ.position.x / 449) * 100}%`,
                top: `${(organ.position.y / 1363) * 100}%`
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveOrgan(key)}
            />
          ))}
        </div>
      </div>

      {/* 右侧内容容器 */}
      <div 
        ref={rightPanelRef}
        className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-6">Digestive System Guide</h2>
        
        <div className="prose">
          <p>Interactive diagram showing the complete process of...</p>
        </div>
      </div>
          
          {/* 全局弹窗（新增）*/}
      <AnimatePresence>
        {activeOrgan && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              className="bg-white rounded-xl shadow-xl max-w-md w-full mx-4"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {organs[activeOrgan].name}
                </h3>
                <p className="text-gray-600">
                  {organs[activeOrgan].description}
                </p>
                <button
                  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                  onClick={() => setActiveOrgan(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
