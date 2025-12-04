import { Check, Menu } from 'lucide-react';
import { useState } from 'react';
import { InterfaceMockup } from './components/InterfaceMockup';
import { Calculator } from './components/Calculator';
import { FAQ } from './components/FAQ';
import { KeySolution } from './components/KeySolution';
import { SimpleWork } from './components/SimpleWork';
import { ProductCategories } from './components/ProductCategories';
import { Footer } from './components/Footer';

function App() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <header className="border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto px-12 py-7 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <button className="p-2.5 hover:bg-gray-50 rounded-lg transition-colors">
              <Menu className="w-7 h-7 text-gray-700" />
            </button>
            <div className="flex items-center gap-1">
              <span className="text-[28px] font-semibold text-gray-900">Контур</span>
              <span className="text-[28px] font-semibold text-[#4193F7]">Маркировка</span>
            </div>
            <nav className="flex items-center gap-10">
              <a href="#" className="text-gray-900 hover:text-gray-600 text-[18px] transition-colors">Отрасли</a>
              <a href="#" className="text-gray-900 hover:text-gray-600 text-[18px] transition-colors">Тарифы</a>
              <a href="#" className="text-gray-900 hover:text-gray-600 text-[18px] transition-colors">ЭДО</a>
              <a href="#" className="text-gray-900 hover:text-gray-600 text-[18px] transition-colors">Блог</a>
            </nav>
          </div>
          <div className="flex items-center gap-5">
            <button className="text-gray-900 hover:text-gray-600 text-[18px] transition-colors">
              Войти
            </button>
            <button
              onClick={() => window.location.href = 'https://kontur.ru/markirovka/buy?from=header-main-page'}
              className="px-8 py-4 text-[18px] font-normal text-[#4193F7] border-2 border-[#4193F7] rounded-full hover:bg-blue-50 transition-colors"
            >
              Заказать консультацию
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="max-w-[1440px] mx-auto px-12 py-24">
          <div className="grid grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <h1 className="text-[56px] font-normal text-gray-900 leading-[1.15] tracking-tight">
                  Маркировка, которая работает <span className="text-[#4193F7]">вместо вас</span>
                </h1>
                <p className="text-[26px] text-gray-700 leading-relaxed font-light">
                  Сервис <span className="text-[#4193F7]">автоматизирует учёт</span> и отчёты в <span className="text-[#4193F7]">Честном ЗНАКе</span>. Меньше ручной работы, штрафов и ошибок.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-[#387FD8] rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 text-[21px] font-light leading-relaxed">Работаем с маркировкой с 2019 года</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-[#387FD8] rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 text-[21px] font-light leading-relaxed">35 лет опыта в бизнес-разработке</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-[#387FD8] rounded-full flex-shrink-0"></div>
                  <span className="text-gray-700 text-[21px] font-light leading-relaxed">Официальный технологический партнёр ЦРПТ</span>
                </div>
              </div>

              <div className="flex items-center gap-5 pt-6">
                <button
                  onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-10 py-4 bg-[#4193F7] text-[#FFFFFF] text-[18px] font-normal rounded-full hover:bg-[#387FD8] transition-colors shadow-sm"
                >
                  Посчитать экономию
                </button>
                <button
                  onClick={() => window.location.href = 'https://kontur.ru/markirovka/test-drive'}
                  className="px-10 py-4 border-2 border-[#4193F7] text-[#4193F7] text-[18px] font-normal rounded-full hover:bg-blue-50 transition-colors"
                >
                  Посмотреть демо
                </button>
              </div>
            </div>

            <InterfaceMockup />
          </div>
        </section>

        <section className="bg-[#4193F7]">
          <div className="max-w-[1440px] mx-auto">
            <div className="px-12 pt-16">
              <h2 className="text-[56px] font-normal text-[#FFFFFF] text-center leading-[1.15] tracking-tight mb-8">
                Вы запускаете маркировку или уже работаете с ней?
              </h2>

              <div className="border-t border-dashed border-[#FFFFFF]/40"></div>
            </div>

            <div className="grid grid-cols-2 gap-0">
              <button
                onClick={() => document.getElementById('problems')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center text-[#FFFFFF] text-[28px] font-normal leading-relaxed hover:bg-[#FFFFFF]/10 transition-all cursor-pointer border-r border-[#FFFFFF]/40 py-24"
              >
                Запускаем, нужно подготовиться
              </button>

              <button
                onClick={() => document.getElementById('simple-work')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center text-[#FFFFFF] text-[28px] font-normal leading-relaxed hover:bg-[#FFFFFF]/10 transition-all cursor-pointer py-24"
              >
                Уже работаем, нужны улучшения
              </button>
            </div>
          </div>
        </section>

        <section id="problems" className="max-w-[1440px] mx-auto px-12 py-24">
          <div className="grid grid-cols-[55%_45%] gap-24 items-start">
            <div className="space-y-10">
              <h2 className="text-[56px] font-normal text-gray-900 leading-[1.15] tracking-tight">
                Товар готов, а документы снова не сходятся
              </h2>

              <p className="text-[26px] text-gray-700 leading-relaxed font-light">
                Когда коды и УПД заполняют вручную, любая опечатка превращается в штраф, возврат партии или сорванные сроки поставки.
              </p>

              <div className="relative">
                <p
                  className="text-[22px] text-[#4193F7] leading-[1.6] font-light cursor-help"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  Пока коды вносят вручную, бизнес платит лишние 20–30 % и чаще всего исправляет ошибки людей, а не системы*
                </p>
                {showTooltip && (
                  <div className="absolute left-0 top-full mt-2 w-full max-w-2xl bg-gray-900 text-white text-sm p-4 rounded-lg shadow-lg z-10">
                    По данным исследования Metrobi по 500 складам (2024–2025 гг.), внедрение систем штрихкод-инвентаризации снижает операционные затраты на 20–30 % и сокращает ошибки, связанные с человеческим фактором, до 95 %.
                  </div>
                )}
              </div>

              <div className="pt-2">
                <button className="px-10 py-4 bg-[#4193F7] text-[#FFFFFF] text-[18px] font-normal rounded-full hover:bg-[#387FD8] transition-colors shadow-sm">
                  Посчитайте, сколько можете сэкономить
                </button>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative">
                <div className="bg-[#B3E5FC] rounded-2xl p-14">
                  <p className="text-[26px] text-gray-900 leading-[1.5] font-light italic">
                    Мы со своей стороны всё делаем правильно, товар уезжает на точку — и вдруг его не могут принять из-за маркировки. Водитель стоит, клиент нервничает, а мы бьёмся головой, в чём ошибка. Раз в неделю какая-нибудь история с Честным ЗНАКом выстреливает.
                  </p>
                </div>
                <div className="absolute -bottom-4 left-12 w-0 h-0 border-t-[20px] border-t-[#B3E5FC] border-r-[20px] border-r-transparent"></div>
              </div>
              <div className="pl-3">
                <p className="text-[19px] text-gray-600 font-light leading-relaxed">
                  Юлия, отвечает за учёт и маркировку<br />
                  на  производстве КМК "НАДЕЖДИНСКИЙ"
                </p>
              </div>
            </div>
          </div>
        </section>

        <KeySolution />

        <section className="max-w-[1440px] mx-auto px-12 py-24">
          <h2 className="text-[56px] font-normal text-gray-900 text-center leading-[1.15] tracking-tight mb-16">
            Окупаемость в первый месяц работы
          </h2>

          <div className="grid grid-cols-3 gap-12">
            <div className="flex items-center justify-center">
              <img src="/metrics/Group 1.svg" alt="Метрика 1" className="w-80 h-auto" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/metrics/Group 2.svg" alt="Метрика 2" className="w-80 h-auto" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/metrics/Group 3.svg" alt="Метрика 3" className="w-80 h-auto" />
            </div>
          </div>
        </section>

        <SimpleWork />

        <Calculator />

        <ProductCategories />

        <FAQ />
      </main>

      <Footer />
    </div>
  );
}

export default App;
