import { Check, ArrowRight } from 'lucide-react';

export function SimpleWork() {
  const features = [
    {
      id: 1,
      isBlue: true,
      title: 'Интеграция с 1С, ERP и складом — без доработок',
      description: 'Ваш ИТ-специалист не пишет код, не мучается с настройками. Связь с 1С и Честным ЗНАКом настраивается автоматически — всё синхронизируется сразу после подключения.',
      iconPosition: 'right',
      renderIcon: (isBlue: boolean) => (
        <div className="flex items-center justify-center gap-8">
          <div className="relative w-28 h-28">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-2xl transform rotate-3 shadow-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[#DC143C] font-black text-5xl tracking-tight" style={{ fontFamily: 'Arial, sans-serif' }}>1C</span>
            </div>
          </div>
          <ArrowRight className="w-12 h-12" style={{ color: isBlue ? '#FFFFFF' : '#4193F7' }} strokeWidth={2} />
          <div className={`relative w-28 h-28 ${isBlue ? 'bg-[#FFFFFF]' : 'bg-[#4193F7]'} rounded-2xl shadow-lg flex items-center justify-center`}>
            <div className="text-center">
              <div className={`w-16 h-16 border-4 ${isBlue ? 'border-[#4193F7]' : 'border-[#FFFFFF]'} rounded-lg mx-auto mb-1 flex items-center justify-center`}>
                <Check className={`w-10 h-10 ${isBlue ? 'text-[#4193F7]' : 'text-[#FFFFFF]'}`} strokeWidth={3} />
              </div>
              <div className={`${isBlue ? 'text-[#4193F7]' : 'text-[#FFFFFF]'} text-xs font-bold tracking-wide`}>ЗНАК</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      isBlue: false,
      title: 'Поддержка 24/7 — без ожиданий и формальностей',
      description: 'Если ночью завис отчёт — не нужно искать виноватых. Наши специалисты отвечают в чате, по телефону и почте даже в выходные и праздники.',
      iconPosition: 'left',
      renderIcon: (isBlue: boolean) => {
        const color = isBlue ? '#FFFFFF' : '#4193F7';
        const badgeColor = isBlue ? '#FFFFFF' : '#4193F7';
        const badgeTextColor = isBlue ? '#4193F7' : '#FFFFFF';
        return (
          <div className="relative w-36 h-36">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="45" fill="none" stroke={color} strokeWidth="2.5"/>
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30 - 90) * Math.PI / 180;
                const x1 = 50 + 38 * Math.cos(angle);
                const y1 = 50 + 38 * Math.sin(angle);
                const x2 = 50 + 42 * Math.cos(angle);
                const y2 = 50 + 42 * Math.sin(angle);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="2"/>;
              })}
              <line x1="50" y1="50" x2="50" y2="25" stroke={color} strokeWidth="3" strokeLinecap="round"/>
              <line x1="50" y1="50" x2="65" y2="50" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="50" cy="50" r="3" fill={color}/>
              <rect x="30" y="65" width="40" height="14" rx="7" fill={badgeColor}/>
              <text x="50" y="75" textAnchor="middle" fill={badgeTextColor} fontSize="10" fontWeight="bold">24/7</text>
            </svg>
          </div>
        );
      }
    },
    {
      id: 3,
      isBlue: true,
      title: 'Работает на любом смартфоне — без проводов и паники',
      description: 'Открыл приложение, отсканировал, всё подтянулось само. Даже если интернет пропал — данные не теряются, синхронизация включится, когда появится связь.',
      iconPosition: 'right',
      renderIcon: (isBlue: boolean) => {
        const color = isBlue ? '#FFFFFF' : '#4193F7';
        const screenColor = isBlue ? 'rgba(255, 255, 255, 0.2)' : '#E8F4FF';
        return (
          <div className="relative w-32 h-40">
            <svg viewBox="0 0 80 120" className="w-full h-full">
              <rect x="10" y="5" width="60" height="110" rx="8" fill="none" stroke={color} strokeWidth="2.5"/>
              <rect x="15" y="15" width="50" height="85" rx="3" fill={screenColor} stroke={color} strokeWidth="1.5"/>
              <rect x="30" y="8" width="20" height="4" rx="2" fill={color}/>
              <circle cx="40" cy="107" r="5" fill="none" stroke={color} strokeWidth="2"/>
              {[...Array(9)].map((_, i) => {
                const row = Math.floor(i / 3);
                const col = i % 3;
                return (
                  <rect
                    key={i}
                    x={22 + col * 14}
                    y={25 + row * 14}
                    width="10"
                    height="10"
                    rx="2"
                    fill={color}
                    opacity="0.4"
                  />
                );
              })}
            </svg>
          </div>
        );
      }
    },
    {
      id: 4,
      isBlue: false,
      title: 'Обучение сотрудников и видеоинструкции',
      description: 'Новый сотрудник открывает короткое видео и через 30 минут уже умеет оформлять УПД. Никаких курсов и бумажных инструкций — всё в одном месте.',
      iconPosition: 'left',
      renderIcon: (isBlue: boolean) => {
        const color = isBlue ? '#FFFFFF' : '#4193F7';
        const screenColor = isBlue ? 'rgba(255, 255, 255, 0.2)' : '#E8F4FF';
        return (
          <div className="relative w-40 h-32">
            <svg viewBox="0 0 120 90" className="w-full h-full">
              <rect x="20" y="5" width="80" height="60" rx="3" fill="none" stroke={color} strokeWidth="2.5"/>
              <rect x="25" y="10" width="70" height="50" fill={screenColor} stroke={color} strokeWidth="1.5"/>
              <circle cx="60" cy="35" r="12" fill={color}/>
              <path d="M 55 28 L 55 42 L 67 35 Z" fill={isBlue ? '#4193F7' : '#FFFFFF'}/>
              <path d="M 10 65 L 20 65 L 25 68 L 95 68 L 100 65 L 110 65 L 115 72 L 5 72 Z" fill="none" stroke={color} strokeWidth="2.5" strokeLinejoin="round"/>
              <rect x="35" y="68.5" width="50" height="2" fill={color} opacity="0.3"/>
            </svg>
          </div>
        );
      }
    },
    {
      id: 5,
      isBlue: true,
      title: 'Автоматические обновления и контроль изменений',
      description: 'Когда меняются требования Честного ЗНАКа — вы даже не замечаете. Система обновляется сама, а уведомление приходит уже после обновления.',
      iconPosition: 'right',
      renderIcon: (isBlue: boolean) => {
        const color = isBlue ? '#FFFFFF' : '#4193F7';
        return (
          <div className="relative w-32 h-36">
            <svg viewBox="0 0 100 110" className="w-full h-full">
              <path
                d="M 50 20 Q 40 20 35 30 L 30 55 Q 28 65 20 70 L 80 70 Q 72 65 70 55 L 65 30 Q 60 20 50 20 Z"
                fill="none"
                stroke={color}
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <circle cx="50" cy="20" r="4" fill={color}/>
              <line x1="50" y1="16" x2="50" y2="8" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="20" y1="70" x2="80" y2="70" stroke={color} strokeWidth="2.5" strokeLinecap="round"/>
              <circle cx="50" cy="76" r="3" fill={color}/>
              <line x1="50" y1="70" x2="50" y2="73" stroke={color} strokeWidth="2"/>
            </svg>
          </div>
        );
      }
    }
  ];

  return (
    <section className="py-24 border-t border-gray-200">
      <div className="text-center mb-16 px-12">
        <h2 className="text-[56px] font-normal text-gray-900 leading-[1.15] tracking-tight mb-6">
          Работать с <span className="text-[#4193F7]">маркировкой</span> стало <span className="text-[#4193F7]">просто</span>
        </h2>
        <p className="text-[26px] text-gray-700 leading-relaxed font-light max-w-4xl mx-auto">
          Каждый этап продуман так, чтобы вы могли внедрить надёжную систему <span className="text-[#4193F7]">без стресса</span> — даже <span className="text-[#4193F7]">без ИТ-специалистов</span>.
        </p>
      </div>

      <div className="space-y-0 mb-16">
        {features.map((feature) => (
          <div key={feature.id} className={`${feature.isBlue ? 'bg-[#4193F7]' : 'bg-[#FFFFFF]'} py-12`}>
            <div className="max-w-[1440px] mx-auto px-12">
              <div className="flex items-center">
                {feature.iconPosition === 'left' ? (
                  <>
                    <div className="w-[30%] flex items-center justify-center">
                      {feature.renderIcon(feature.isBlue)}
                    </div>
                    <div className="w-[70%] pl-12">
                      <h3 className={`${feature.isBlue ? 'text-[#FFFFFF]' : 'text-[#000000]'} text-[28px] font-semibold mb-4 leading-snug`}>
                        {feature.title}
                      </h3>
                      <p className={`${feature.isBlue ? 'text-[#FFFFFF]' : 'text-[#4a4a4a]'} text-[18px] leading-relaxed font-light`}>
                        {feature.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-[70%] pr-12">
                      <h3 className={`${feature.isBlue ? 'text-[#FFFFFF]' : 'text-[#000000]'} text-[28px] font-semibold mb-4 leading-snug`}>
                        {feature.title}
                      </h3>
                      <p className={`${feature.isBlue ? 'text-[#FFFFFF]' : 'text-[#4a4a4a]'} text-[18px] leading-relaxed font-light`}>
                        {feature.description}
                      </p>
                    </div>
                    <div className="w-[30%] flex items-center justify-center">
                      {feature.renderIcon(feature.isBlue)}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center px-12">
        <p className="text-[28px] text-gray-700 leading-relaxed font-light max-w-4xl mx-auto">
          Все сделано, чтобы маркировка не тормозила бизнес, а помогала работать быстрее
        </p>
      </div>
    </section>
  );
}
