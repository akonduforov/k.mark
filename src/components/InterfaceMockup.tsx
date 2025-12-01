export function InterfaceMockup() {
  return (
    <div className="bg-[#FFFFFF] rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
      <div className="flex h-[500px]">
        <div className="w-32 bg-[#4193F7] text-[#FFFFFF] flex flex-col py-8">
          <div className="flex flex-col items-center gap-2 px-4 py-4 bg-[#387FD8]">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <rect x="4" y="4" width="6" height="6" rx="1"/>
                <rect x="4" y="14" width="6" height="6" rx="1"/>
                <rect x="14" y="4" width="6" height="6" rx="1"/>
              </svg>
            </div>
            <span className="text-xs text-center">Оборот кодов</span>
          </div>

          <div className="flex flex-col items-center gap-2 px-4 py-4">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 8h-3V4H3v14h3v4h14V8zm-5 10H5V6h10v12z"/>
              </svg>
            </div>
            <span className="text-xs text-center">Отгрузка</span>
          </div>

          <div className="flex flex-col items-center gap-2 px-4 py-4">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
              </svg>
            </div>
            <span className="text-xs text-center">Приемка</span>
          </div>

          <div className="flex flex-col items-center gap-2 px-4 py-4">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <rect x="4" y="6" width="16" height="2"/>
                <rect x="4" y="11" width="10" height="2"/>
                <rect x="4" y="16" width="14" height="2"/>
              </svg>
            </div>
            <span className="text-xs text-center">Устройства</span>
          </div>

          <div className="flex flex-col items-center gap-2 px-4 py-4 bg-[#4193F7]">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="3" width="7" height="7" rx="1"/>
                <rect x="3" y="13" width="7" height="7" rx="1"/>
                <rect x="13" y="3" width="7" height="7" rx="1"/>
                <rect x="13" y="13" width="7" height="7" rx="1"/>
              </svg>
            </div>
            <span className="text-xs text-center">Коды маркировки</span>
          </div>
        </div>

        <div className="flex-1 bg-[#F6F6F6] p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">Заказ кодов</h2>
              <button className="text-sm text-[#4193F7] flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                </svg>
                Обновить
              </button>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <button className="px-4 py-2 bg-[#4193F7] text-[#FFFFFF] text-sm font-medium rounded flex items-center gap-2">
                <span>+</span>
                Заказать коды
              </button>
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Поиск по номеру документа"
                  className="w-full px-4 py-2 border border-gray-300 rounded text-sm"
                  readOnly
                />
              </div>
            </div>
          </div>

          <div className="bg-[#FFFFFF] rounded-lg border border-gray-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-gray-600 font-medium">Создан ▼</th>
                  <th className="px-4 py-3 text-left text-gray-600 font-medium">Заказ</th>
                  <th className="px-4 py-3 text-left text-gray-600 font-medium">Кол-во кодов</th>
                  <th className="px-4 py-3 text-left text-gray-600 font-medium">Статус ▼</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 text-gray-700">09.08.2023</td>
                  <td className="px-4 py-3">
                    <div className="text-[#4193F7] font-medium">№ 76528643</div>
                    <div className="text-gray-600 text-xs">Обувь, Импорт</div>
                  </td>
                  <td className="px-4 py-3 text-gray-700">160 000</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
                      <span className="text-gray-700">Черновик</span>
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 text-gray-700">09.08.2023</td>
                  <td className="px-4 py-3">
                    <div className="text-[#4193F7] font-medium">№ 76528642</div>
                    <div className="text-gray-600 text-xs">Молочная продукция,<br />Производство РФ</div>
                  </td>
                  <td className="px-4 py-3 text-gray-700">9 000</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span className="text-gray-700">Получены</span>
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="px-4 py-3 text-gray-700">09.08.2023</td>
                  <td className="px-4 py-3">
                    <div className="text-[#4193F7] font-medium">№ 76528641</div>
                    <div className="text-gray-600 text-xs">Обувь, Импорт</div>
                  </td>
                  <td className="px-4 py-3 text-gray-700">10</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span className="text-gray-700">Выпущены</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-700">09.08.2023</td>
                  <td className="px-4 py-3">
                    <div className="text-[#4193F7] font-medium">№ 76528640</div>
                    <div className="text-gray-600 text-xs">Обувь, Импорт</div>
                  </td>
                  <td className="px-4 py-3 text-gray-700">45</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-1">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span className="text-gray-700">Переданы частично</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
