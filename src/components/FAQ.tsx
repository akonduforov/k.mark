import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Когда нужно внедрять маркировку?',
    answer: 'Чем раньше вы запустите систему, тем меньше риск остановки продаж и штрафов. Маркировка уже обязательна для одежды и текстиля.',
  },
  {
    question: 'Что, если у нас небольшие объёмы — окупится ли внедрение?',
    answer: 'Да, тариф масштабируется под объём. Даже при малом выпуске экономика идёт за счёт сокращения ручного труда и ошибок.',
  },
  {
    question: 'Мы справляемся вручную — зачем менять?',
    answer: 'Ручная работа — скрытые расходы. Ошибки и переделки часто обходятся дороже абонплаты за автоматизацию.',
  },
  {
    question: 'Почему у конкурентов дешевле?',
    answer: 'Дешёвые решения часто не соответствуют требованиям Честного ЗНАКа и требуют доработок. Контур Маркировка — надёжный сервис с готовыми коннекторами и поддержкой.',
  },
  {
    question: 'Не сломается ли 1С или ERP при подключении?',
    answer: 'Нет. Мы используем готовые модули. Подключение занимает 3–5 дней и не требует остановки производственных линий.',
  },
  {
    question: 'Что, если сервис даст сбой?',
    answer: 'Система резервирована, работает в облаке и автоматически восстанавливает данные. Поддержка отвечает 24/7, включая выходные.',
  },
  {
    question: 'Нужно ли обучать сотрудников?',
    answer: 'Интерфейс понятный: достаточно 1–2 часов. Мы помогаем при запуске, а потом остаёмся на связи через чат, статьи и видеоинструкции.',
  },
];

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="max-w-[1440px] mx-auto px-12 py-24">
      <h2 className="text-[56px] font-normal text-gray-900 text-center leading-[1.15] tracking-tight mb-16">
        FAQ
      </h2>

      <div className="max-w-[1100px] mx-auto space-y-0">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              onClick={() => toggleItem(index)}
              className="w-full py-8 flex items-center justify-between text-left hover:bg-[#F6F6F6]/50 transition-colors group"
            >
              <span className="text-[24px] text-[#4193F7] font-normal pr-8 group-hover:text-[#387FD8] transition-colors">
                {item.question}
              </span>
              <ChevronDown
                className={`w-7 h-7 text-[#4193F7] flex-shrink-0 transition-transform duration-300 ${
                  openItems.includes(index) ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openItems.includes(index) ? 'max-h-96 pb-8' : 'max-h-0'
              }`}
            >
              <p className="text-[20px] text-gray-700 leading-relaxed font-light">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
