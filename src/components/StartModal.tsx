import { X, PlayCircle, Phone, CreditCard, MessageCircle } from 'lucide-react';

interface StartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StartModal({ isOpen, onClose }: StartModalProps) {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleOptionClick = (option: 'demo' | 'call' | 'pay' | 'chat') => {
    console.log(option);
  };

  return (
    <div
      className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4"
      onClick={handleOverlayClick}
    >
      <div className="bg-[#FFFFFF] rounded-2xl shadow-lg max-w-[900px] w-[90%] overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Закрыть"
        >
          <X size={32} />
        </button>

        <div className="py-12 px-10">
          <h2 className="text-4xl font-bold text-gray-900 text-center">
            Выберите, как начать работу
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10">
          <button
            onClick={() => handleOptionClick('demo')}
            className="flex flex-col items-center gap-4 px-8 py-12 bg-[#387FD8] text-[#FFFFFF] hover:bg-[#4193F7] transition-all cursor-pointer rounded-2xl"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <PlayCircle size={56} />
            </div>
            <div className="text-center">
              <div className="font-semibold text-xl mb-2">
                Получить демо-версию
              </div>
              <div className="text-sm text-blue-100">
                и посмотреть, как работает продукт
              </div>
            </div>
          </button>

          <button
            onClick={() => handleOptionClick('call')}
            className="flex flex-col items-center gap-4 px-8 py-12 bg-[#387FD8] text-[#FFFFFF] hover:bg-[#4193F7] transition-all cursor-pointer rounded-2xl"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <Phone size={56} />
            </div>
            <div className="text-center">
              <div className="font-semibold text-xl mb-2">
                Запланировать звонок
              </div>
              <div className="text-sm text-blue-100">
                чтобы проконсультироваться, подходит ли решение вам
              </div>
            </div>
          </button>

          <button
            onClick={() => handleOptionClick('pay')}
            className="flex flex-col items-center gap-4 px-8 py-12 bg-[#387FD8] text-[#FFFFFF] hover:bg-[#4193F7] transition-all cursor-pointer rounded-2xl"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <CreditCard size={56} />
            </div>
            <div className="text-center">
              <div className="font-semibold text-xl mb-2">
                Сразу оплатить
              </div>
              <div className="text-sm text-blue-100">
                если вы уже приняли решение
              </div>
            </div>
          </button>

          <button
            onClick={() => handleOptionClick('chat')}
            className="flex flex-col items-center gap-4 px-8 py-12 bg-[#387FD8] text-[#FFFFFF] hover:bg-[#4193F7] transition-all cursor-pointer rounded-2xl"
          >
            <div className="w-16 h-16 flex items-center justify-center">
              <MessageCircle size={56} />
            </div>
            <div className="text-center">
              <div className="font-semibold text-xl mb-2">
                Написать в чат
              </div>
              <div className="text-sm text-blue-100">
                и задать важные вопросы
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
