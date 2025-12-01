import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import StartModal from './StartModal';

const formatNumber = (num: number): string => {
  return Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export function Calculator() {
  const [batchesPerMonth, setBatchesPerMonth] = useState(100);
  const [unitsPerBatch, setUnitsPerBatch] = useState(1000);
  const [errorFixCost, setErrorFixCost] = useState(50);
  const [yearlySavings, setYearlySavings] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isBreakdownOpen, setIsBreakdownOpen] = useState(false);
  const [isStartModalOpen, setIsStartModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const errorRate = 0.02;
      const reductionFactor = 0.8;

      const monthlyErrors = batchesPerMonth * unitsPerBatch * errorRate;
      const manualLoss = monthlyErrors * errorFixCost;
      const savings = manualLoss * reductionFactor * 12;

      setYearlySavings(savings);
    }, 300);

    return () => clearTimeout(timer);
  }, [batchesPerMonth, unitsPerBatch, errorFixCost]);

  const handleChange = (setter: (value: number) => void, value: number) => {
    setHasInteracted(true);
    setter(value);
  };

  const showTable = hasInteracted && yearlySavings > 0;

  const totalUnitsPerMonth = batchesPerMonth * unitsPerBatch;
  const manualErrors = totalUnitsPerMonth * 0.02;
  const manualLoss = manualErrors * errorFixCost;

  return (
    <section className="bg-[#F6F6F6] py-24">
      <div className="max-w-[1440px] mx-auto px-12">
        <h2 className="text-[56px] font-normal text-gray-900 text-center leading-[1.15] tracking-tight mb-3">
          Посчитайте, во сколько обходятся ошибки вашим конкурентам
        </h2>

        <p className="text-[22px] text-gray-900 text-center mb-12 font-light">
          Работаем на рынке маркировки 7 лет, обслуживаем более 12 000 компаний и знаем, сколько стоит каждая ошибка.
        </p>

        <div className="bg-[#FFFFFF] rounded-2xl shadow-lg p-10 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col">
              <label className="text-[16px] font-normal text-gray-900 mb-4">
                Партий в месяц
              </label>
              <input
                type="number"
                value={batchesPerMonth || ''}
                onChange={(e) => handleChange(setBatchesPerMonth, Number(e.target.value) || 0)}
                className="w-full px-5 py-3 border border-gray-200 rounded-xl text-[24px] font-normal text-gray-900 focus:outline-none focus:border-[#4193F7] transition-colors mb-3"
                min="0"
              />
              <input
                type="range"
                value={batchesPerMonth}
                onChange={(e) => handleChange(setBatchesPerMonth, Number(e.target.value))}
                min="0"
                max="1000"
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#4193F7] [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#4193F7] [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[16px] font-normal text-gray-900 mb-4">
                Единиц в партии
              </label>
              <input
                type="number"
                value={unitsPerBatch || ''}
                onChange={(e) => handleChange(setUnitsPerBatch, Number(e.target.value) || 0)}
                className="w-full px-5 py-3 border border-gray-200 rounded-xl text-[24px] font-normal text-gray-900 focus:outline-none focus:border-[#4193F7] transition-colors mb-3"
                min="0"
              />
              <input
                type="range"
                value={unitsPerBatch}
                onChange={(e) => handleChange(setUnitsPerBatch, Number(e.target.value))}
                min="0"
                max="10000"
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#4193F7] [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#4193F7] [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-[16px] font-normal text-gray-900 mb-4">
                Средняя цена исправления одной ошибки
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={errorFixCost || ''}
                  onChange={(e) => handleChange(setErrorFixCost, Number(e.target.value) || 0)}
                  className="w-full px-5 py-3 pr-12 border border-gray-200 rounded-xl text-[24px] font-normal text-gray-900 focus:outline-none focus:border-[#2196F3] transition-colors mb-3"
                  min="0"
                />
                <span className="absolute right-5 top-3 text-[22px] text-gray-400">₽</span>
              </div>
              <input
                type="range"
                value={errorFixCost}
                onChange={(e) => handleChange(setErrorFixCost, Number(e.target.value))}
                min="0"
                max="1000"
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#4193F7] [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-[#4193F7] [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
              />
            </div>
          </div>

          <div className="text-center mb-10">
            <h3 className="text-[44px] font-normal text-gray-900 leading-none tracking-tight mb-3">
              Экономия {formatNumber(yearlySavings)} ₽ в год
            </h3>

            <button
              onClick={() => setIsBreakdownOpen(true)}
              className="text-[16px] text-[#4193F7] underline font-medium mb-8 inline-block"
            >
              Как мы посчитали
            </button>

            {showTable && (
              <div className="bg-[#FFFFFF] rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-6 max-w-[700px] mx-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left px-5 py-5 text-[16px] font-medium text-gray-500"></th>
                      <th className="text-center px-4 py-5 text-[20px] font-semibold text-gray-900 bg-gray-50">
                        Ручная маркировка
                      </th>
                      <th className="text-center px-4 py-5 text-[20px] font-semibold text-[#FFFFFF] bg-[#4193F7]">
                        Контур.Маркировка
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-5 text-[16px] font-medium text-gray-700">Ошибки</td>
                      <td className="px-4 py-5 text-center text-[18px] text-gray-900">~2%</td>
                      <td className="px-4 py-5 text-center text-[18px] text-[#FFFFFF] font-medium bg-[#4193F7]">≤ 0,1%</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-5 text-[16px] font-medium text-gray-700">Время</td>
                      <td className="px-4 py-5 text-center text-[18px] text-gray-900">10 ч/1000 ед.</td>
                      <td className="px-4 py-5 text-center text-[18px] text-[#FFFFFF] font-medium bg-[#4193F7]">2 ч/1000 ед.</td>
                    </tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-5 text-[16px] font-medium text-gray-700">Штрафы</td>
                      <td className="px-4 py-5 text-center text-[18px] text-gray-900">до 3 600 000 ₽/год</td>
                      <td className="px-4 py-5 text-center text-[18px] text-[#FFFFFF] font-medium bg-[#4193F7]">0 ₽</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-5 text-[16px] font-medium text-gray-700">Вовлечено</td>
                      <td className="px-4 py-5 text-center text-[18px] text-gray-900">3 сотрудника</td>
                      <td className="px-4 py-5 text-center text-[18px] text-[#FFFFFF] font-medium bg-[#4193F7]">1 оператор</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="text-center">
            <button
              onClick={() => setIsStartModalOpen(true)}
              className="px-10 py-4 bg-[#4193F7] text-[#FFFFFF] text-[18px] font-normal rounded-full hover:bg-[#387FD8] transition-colors shadow-sm"
            >
              Подключить маркировку
            </button>
          </div>

          <StartModal
            isOpen={isStartModalOpen}
            onClose={() => setIsStartModalOpen(false)}
          />
        </div>
      </div>

      {isBreakdownOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
          onClick={() => setIsBreakdownOpen(false)}
        >
          <div
            className="bg-[#FFFFFF] rounded-2xl shadow-2xl max-w-[600px] w-full max-h-[90vh] overflow-y-auto p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-8">
              <h3 className="text-[32px] font-bold text-gray-900 pr-8">
                Расчёт вашей экономии
              </h3>
              <button
                onClick={() => setIsBreakdownOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
              >
                <X size={28} />
              </button>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-[20px] font-semibold text-gray-900 mb-4">
                  Объём кодов в год
                </h4>
                <div className="space-y-2 text-[16px] text-gray-700">
                  <p>Партий в месяц — {formatNumber(batchesPerMonth)}</p>
                  <p>Единиц в партии — {formatNumber(unitsPerBatch)}</p>
                  <p className="font-medium">
                    Итого единиц в месяц — {formatNumber(batchesPerMonth)} × {formatNumber(unitsPerBatch)} = {formatNumber(totalUnitsPerMonth)}
                  </p>
                  <p className="font-medium">
                    Итого единиц в год — {formatNumber(totalUnitsPerMonth)} × 12 = {formatNumber(totalUnitsPerMonth * 12)}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-[20px] font-semibold text-gray-900 mb-4">
                  Ошибки при ручной маркировке
                </h4>
                <div className="space-y-2 text-[16px] text-gray-700">
                  <p>Мы считаем, что при ручной работе средний уровень ошибок — 2 %.</p>
                  <p>
                    Число ошибок в месяц — {formatNumber(totalUnitsPerMonth)} × 2 % = {formatNumber(manualErrors)}.
                  </p>
                  <p>
                    Средняя цена исправления одной ошибки — {formatNumber(errorFixCost)} ₽.
                  </p>
                  <p className="font-medium">
                    Потери на исправление ошибок — {formatNumber(manualErrors)} × {formatNumber(errorFixCost)} ₽ = {formatNumber(manualLoss)} ₽ в месяц.
                  </p>
                  <p className="font-medium">
                    Потери в год — {formatNumber(manualLoss)} ₽ × 12 = {formatNumber(manualLoss * 12)} ₽.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-[20px] font-semibold text-gray-900 mb-4">
                  Экономия с автоматизацией
                </h4>
                <div className="space-y-2 text-[16px] text-gray-700">
                  <p>
                    При автоматизации мы закладываем, что до 80 % этих потерь можно убрать за счёт снижения ошибок и ручных операций.
                  </p>
                  <p className="font-medium">
                    Экономия в год — {formatNumber(manualLoss * 12)} ₽ × 80 % = {formatNumber(yearlySavings)} ₽.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <p className="text-[18px] font-bold text-gray-900">
                  Итого: экономия {formatNumber(yearlySavings)} ₽ в год при введённых вами параметрах.
                </p>
              </div>

              <div>
                <h4 className="text-[16px] font-semibold text-gray-900 mb-3">
                  Что важно учитывать
                </h4>
                <div className="space-y-2 text-[14px] text-gray-600">
                  <p>Калькулятор показывает ориентировочную оценку экономии.</p>
                  <p>
                    В расчёт не входят возможные штрафы, возвраты партий и простои производства.
                  </p>
                  <p>
                    Фактический эффект зависит от ваших процессов, объёмов и уровня ошибок до автоматизации.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
