import { useState } from 'react';

type CategoryType = 'food' | 'non-food' | 'experiment' | 'post-exemplary';

interface Category {
  icon: string;
  label: string;
}

const categories: Record<CategoryType, Category[]> = {
  food: [
    {
      label: 'Молочная продукция',
      icon: '/food/variant=1.png'
    },
    {
      label: 'Вода и напитки безалкогольные',
      icon: '/food/variant=2.png'
    },
    {
      label: 'Пиво и напитки слабоалкогольные',
      icon: '/food/variant=3.png'
    },
    {
      label: 'Консервированные продукты',
      icon: '/food/variant=4.png'
    },
    {
      label: 'Растительное масло',
      icon: '/food/variant=5.png'
    },
    {
      label: 'БАДы',
      icon: '/food/variant=6.png'
    },
    {
      label: 'Бакалейная продукция',
      icon: '/food/variant=7.png'
    },
    {
      label: 'Спортивное питание',
      icon: '/food/variant=8.png'
    },
    {
      label: 'Икра',
      icon: '/food/variant=9.png'
    },
    {
      label: 'Кондитерские изделия',
      icon: '/food/variant=10.png'
    },
    {
      label: 'Растворимые напитки',
      icon: '/food/variant=11.png'
    }
  ],
  'non-food': [
    {
      label: 'Лекарства',
      icon: '/nonfood/variant=1.png'
    },
    {
      label: 'Антисептики',
      icon: '/nonfood/variant=2.png'
    },
    {
      label: 'Ветпрепараты',
      icon: '/nonfood/variant=3.png'
    },
    {
      label: 'Косметика и бытовая химия',
      icon: '/nonfood/variant=4.png'
    },
    {
      label: 'Медизделия',
      icon: '/nonfood/variant=5.png'
    },
    {
      label: 'Корм для животных',
      icon: '/nonfood/variant=6.png'
    },
    {
      label: 'Одежда и текстиль',
      icon: '/nonfood/variant=7.png'
    },
    {
      label: 'Обувь',
      icon: '/nonfood/variant=8.png'
    },
    {
      label: 'Туалетная вода и духи',
      icon: '/nonfood/variant=9.png'
    },
    {
      label: 'Детские игрушки',
      icon: '/nonfood/variant=10.png'
    },
    {
      label: 'Велосипеды',
      icon: '/nonfood/variant=11.png'
    },
    {
      label: 'Табачная продукция',
      icon: '/nonfood/variant=12.png'
    },
    {
      label: 'Радиоэлектроника',
      icon: '/nonfood/variant=13.png'
    },
    {
      label: 'Моторное масло',
      icon: '/nonfood/variant=14.png'
    },
    {
      label: 'Шины и покрышки',
      icon: '/nonfood/variant=15.png'
    },
    {
      label: 'ТСР и кресла-коляски',
      icon: '/nonfood/variant=5.png'
    },
    {
      label: 'Строительные материалы',
      icon: '/nonfood/variant=16.png'
    },
    {
      label: 'Печатная продукция',
      icon: '/nonfood/variant=17.png'
    }
  ],
  experiment: [
    {
      label: 'Отопительные приборы',
      icon: '/exp/variant=1.png'
    },
    {
      label: 'Кабельная продукция',
      icon: '/exp/variant=2.png'
    },
    {
      label: 'Оптоволокно',
      icon: '/exp/variant=3.png'
    },
    {
      label: 'Полимерные трубы',
      icon: '/exp/variant=4.png'
    },
    {
      label: 'Средства пожаротушения',
      icon: '/exp/variant=5.png'
    },
    {
      label: 'Пиротехника',
      icon: '/exp/variant=6.png'
    },
    {
      label: 'Автозапчасти',
      icon: '/exp/variant=7.png'
    },
    {
      label: 'Слабый алкоголь',
      icon: '/exp/variant=8.png'
    },
    {
      label: 'Медицинские изделия 2.0',
      icon: '/exp/variant=9.png'
    },
    {
      label: 'Титановая металлопродукция',
      icon: '/exp/variant=10.png'
    },
    {
      label: 'Мясные изделия и замороженные полуфабрикаты',
      icon: '/exp/variant=11.png'
    }
  ],
  'post-exemplary': [
    {
      label: 'Пиво и напитки слабоалкогольные',
      icon: '/one/variant=1.png'
    },
    {
      label: 'Вода и напитки безалкогольные',
      icon: '/one/variant=2.png'
    },
    {
      label: 'Велосипеды',
      icon: '/one/variant=3.png'
    },
    {
      label: 'БАД и антисептики',
      icon: '/one/variant=4.png'
    },
    {
      label: 'Медизделия, ТСР и кресла-коляски',
      icon: '/one/variant=5.png'
    }
  ]
};

export function ProductCategories() {
  const [activeTab, setActiveTab] = useState<CategoryType>('non-food');

  const tabs: { id: CategoryType; label: string }[] = [
    { id: 'non-food', label: 'Непродовольственные' },
    { id: 'food', label: 'Продовольственные' },
    { id: 'experiment', label: 'Эксперимент' },
    { id: 'post-exemplary', label: 'Поэкземплярный учет' }
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-12 py-24">
      <h2 className="text-[56px] font-normal text-gray-900 leading-[1.15] tracking-tight mb-12">
        Работаем с товарами, подлежащими обязательной маркировке
      </h2>

      <div className="flex gap-4 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-8 py-3 rounded-full text-[18px] font-normal transition-all ${
              activeTab === tab.id
                ? 'bg-[#4193F7] text-[#FFFFFF]'
                : 'bg-[#F0F0F0] text-gray-900 hover:bg-[#E5E5E5]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {categories[activeTab].map((category, index) => (
          <div
            key={index}
            className="bg-[#F6F6F6] rounded-2xl p-6 flex items-center gap-4 hover:bg-[#EEEEEE] transition-colors"
          >
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
              <img
                src={category.icon}
                alt={category.label}
                className="max-w-full max-h-full object-contain"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(48%) sepia(96%) saturate(2079%) hue-rotate(195deg) brightness(100%) contrast(93%)'
                }}
              />
            </div>
            <span className="text-[20px] text-gray-900 font-normal">
              {category.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
