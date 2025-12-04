import { Check } from 'lucide-react';

export function KeySolution() {
  const steps = [
    {
      number: 1,
      title: 'Подключение',
      description: 'Настраиваем связь с Честным ЗНАКом и 1С, анализируем процессы, назначаем специалиста по внедрению',
      requirement: 'Отправляете заявку'
    },
    {
      number: 2,
      title: 'Заказ кодов',
      description: 'Автоматически заказываем и распределяем коды по номенклатурам',
      requirement: 'Проверяете данные'
    },
    {
      number: 3,
      title: 'Нанесение',
      description: 'Передаём коды на линию и в учётную систему, подбираем нужное оборудование (принтеры, сканеры, ТСД)',
      requirement: 'Печатаете этикетки'
    },
    {
      number: 4,
      title: 'Отчётность',
      description: 'Отправляем УПД и отчёты, поддерживаем работу через мобильное приложение — даже без интернета',
      requirement: 'Подтверждаете ввод'
    },
    {
      number: 5,
      title: 'Поддержка и обучение',
      description: 'Инструктируем сотрудников, следим за изменениями в законодательстве',
      requirement: 'Работаете спокойно'
    }
  ];

  return (
    <>
      <section className="max-w-[1440px] mx-auto px-12 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-[56px] font-normal text-gray-900 leading-[1.15] tracking-tight mb-6">
            Как проходит внедрение сервиса
          </h2>
          <p className="text-[26px] text-gray-700 leading-relaxed font-light max-w-3xl mx-auto">
            От кода до отчёта — всё в одной системе, без остановки производства.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-24 mb-8">
          <div className="text-left pl-20">
            <h3 className="text-[28px] font-semibold text-gray-900">Сделаем сами</h3>
          </div>
          <div className="text-left pl-4">
            <h3 className="text-[28px] font-semibold text-gray-900">Требуется от вас</h3>
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gray-200"></div>

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="grid grid-cols-2 gap-24 items-center relative">
                <div className="flex items-start gap-4 relative">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#4193F7] rounded-2xl flex items-center justify-center relative z-10">
                    <span className="text-[#FFFFFF] text-xl font-bold">{step.number}</span>
                  </div>
                  <div className="bg-[#F6F6F6] rounded-2xl p-5 flex-1 relative">
                    <h4 className="text-[#000000] text-[20px] font-semibold mb-2 leading-snug">
                      {step.title}
                    </h4>
                    <p className="text-[#4a4a4a] text-[18px] leading-relaxed font-light">
                      {step.description}
                    </p>
                    <div className="absolute right-0 top-1/2 translate-x-full w-24 border-t-2 border-dashed border-[#4193F7] opacity-40 -translate-y-1/2"></div>
                  </div>
                </div>

                <div className="bg-[#F6F6F6] rounded-2xl px-5 py-4 flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-7 h-7 rounded-full bg-[#4193F7] flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#FFFFFF]" strokeWidth={3} />
                    </div>
                  </div>
                  <p className="text-[#000000] text-[19px] font-normal leading-snug">
                    {step.requirement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#387FD8] py-8">
        <div className="max-w-[1440px] mx-auto px-12">
          <p className="text-[#FFFFFF] text-[26px] font-light text-center leading-relaxed">
            За 3–5 дней настраиваем процесс маркировки так, чтобы сократить ручной труд и риски простоев и ошибок
          </p>
        </div>
      </section>
    </>
  );
}
