// app/physiology/page.jsx
'use client';
import { BookOpenIcon, BeakerIcon, ScaleIcon, HeartIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function PhysiologyPage() {
    

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        {/* 标题部分 */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            The Digestive System of Mammals
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            There are four basic feeding types in mammals: insectivores, carnivores, herbivores and omnivores.
          </p>
        </div>

        

        {/* 解剖结构 */}
        <section className="grid lg:grid-cols-2 gap-8 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-green-600 mb-6">
                Anatomy
            </h2>
            
            {/* 通用结构 */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpenIcon className="w-5 h-5 text-blue-500" />
                Common Structures
              </h3>
              <p className="text-gray-600">
                All mammals share some basic structure components in their digestive systems: 
                <span className="font-medium text-blue-600"> mouth → esophagus → stomach → small intestine → colon</span>
              </p>
            </div>

            {/* 草食动物部分 */}
            <div className="flex gap-4 mb-8">
              <div className="bg-green-50 p-3 rounded-lg">
                <ScaleIcon className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    
                    Herbivore Adaptations
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-3">
                <ul>
                  <li>Have Large, long digestive tracts (10-12x body length) </li>
                  <li>Must eat considerable plant food</li>
                  <li>In some herbivores (horses, rabbits, elephants, rodents):</li>
                    <ul className="list-[circle] pl-6 mt-2">
                        <li>Develop <span className="font-semibold">cecum</span> - a side pocket for cellulose digestion</li>
                        <li>The cecum stores food material where bacteria break down cellulose</li>
                    </ul>
                    <div className="relative w-full h-48 mt-4 rounded-xl overflow-hidden border border-gray-200">
                      <Image
                        src="/images/cecum-structure.jpg"
                        fill
                        alt="Cecum structure"
                        className="object-contain bg-gray-50 p-4"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-xs text-center">
                        Cecum Structure in Herbivores
                      </div>
                    </div>
                    
                  </ul>
                  <li>In ruminants:
                    <ul className="list-[circle] pl-6 mt-2">
                        <li>Bacteria dwell in first chambers of the four-chambered stomach</li>
                    </ul>
                    <div className="relative w-full h-48 mt-4 rounded-xl overflow-hidden border border-gray-200">
                      <Image
                        src="/images/ruminant-stomach.jpg"
                        fill
                        alt="Four-chambered stomach"
                        className="object-contain bg-gray-50 p-4"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-xs text-center">
                        Ruminant Stomach Chambers
                        </div>
                    </div>
                </li>
                  
                </ul>
              </div>
            </div>

            {/* 肉食动物部分 */}
            <div className="flex gap-4">
              <div className="bg-red-50 p-3 rounded-lg">
                <HeartIcon className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    Carnivore Features
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Equipped with biting and piercing teeth and powerful clawed limbs</li>
                    <li>Main prey are herbivores</li>
                    <li>Protein diet requires:</li>
                        <ul className="list-[circle] pl-6 mt-2">
                            <li>Shorter digestive tract</li>
                            <li>Small or absent cecum</li>
                        </ul>
                    <li>Sharp teeth and claws for hunting
                    <div className="relative w-full h-48 mt-4 rounded-xl overflow-hidden border border-gray-200">
                      <Image
                        src="/images/carnivore-teeth.jpg"
                        fill
                        alt="Carnivore dentition"
                        className="object-contain bg-gray-50 p-4"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-xs text-center">
                        Carnivore Dentition
                      </div>
                    </div>
                  </li>
                  <li className="mt-4">Short digestive tract
                    <div className="relative w-full h-48 mt-4 rounded-xl overflow-hidden border border-gray-200">
                      <Image
                        src="/images/digestive-comparison.jpg"
                        fill
                        alt="Digestive tract comparison"
                        className="object-contain bg-gray-50 p-4"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-xs text-center">
                        Digestive Tract Comparison
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 生理过程 */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
              Physiological Processes
            </h2>
            
            <div className="space-y-8">
              {/* 机械消化 */}
              <div className="flex gap-4">
                <div className="bg-purple-50 p-3 rounded-lg">
                  <BeakerIcon className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Mechanical Digestion</h3>
                  <ol className="pl-6 text-gray-600 space-y-3">
                    <li className="flex gap-2">
                      <span className="font-bold text-blue-600">1.</span>
                      Swallowing initiates food movement into esophagus
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-blue-600">2.</span>
                      Peristalsis: wave-like muscle contractions
                      <ul className="list-[circle] pl-6 mt-2 text-sm">
                        <li>Occurs throughout digestive tract</li>
                        <li>Propels food from esophagus to intestines</li>
                      </ul>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-bold text-blue-600">3.</span>
                      Sphincter muscles control passage between stages
                    </li>
                  </ol>
                </div>
              </div>

              {/* 化学消化 */}
              <div className="flex gap-4">
                <div className="bg-yellow-50 p-3 rounded-lg ">
                  <BeakerIcon className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Chemical Digestion</h3>
                  <div className="space-y-4 text-gray-600 ">
                    <p>
                      <strong className="block mb-1">Initial Stage:</strong>
                      <span className="ml-4">• Mouth: Salivary enzymes start carbohydrate breakdown</span><br/>
                      <span className="ml-4">• Stomach: Acid activates protein digestion</span>
                    </p>
                    <p>
                      <strong className="block mb-1">Main Site:</strong>
                      <span className="ml-4">• Small intestine: 90% of nutrient absorption</span>
                    </p>
                    <p>
                      <strong className="block mb-1">Final Stage:</strong>
                      <span className="ml-4">• Colon: Water & salt reabsorption</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 比较表格 */}
        <section className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 mb-20">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-600 mb-8">
            Comparative Analysis
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="pb-4">Feature</th>
                  <th className="pb-4">Herbivores</th>
                  <th className="pb-4">Carnivores</th>
                  <th className="pb-4">Omnivores</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-50">
                  <td className="py-3 font-medium">Gut Length</td>
                  <td>Long (10-12x)</td>
                  <td>Short (3-4x)</td>
                  <td>Moderate (6-8x)</td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="py-3 font-medium">Cecum</td>
                  <td>Well-developed</td>
                  <td>Absent</td>
                  <td>Small</td>
                </tr>
                <tr className="border-b border-gray-50">
                  <td className="py-3 font-medium">Stomach Chambers</td>
                  <td>1-4 chambers</td>
                  <td>Single</td>
                  <td>Single</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}