export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-12 py-8">
        <div className="space-y-3">
          <p className="text-sm text-gray-400">
            © 1988–2025 СКБ Контур
          </p>
          <p className="text-sm text-gray-400 leading-relaxed max-w-4xl">
            Используем cookies для корректной работы сайта, персонализации пользователей и других целей, предусмотренных{' '}
            <a
              href="https://kontur.ru/about/policy"
              className="text-gray-400 underline hover:text-gray-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              политикой обработки персональных данных
            </a>
            . На информационном ресурсе применяются{' '}
            <a
              href="https://kontur.ru/about/policy/recomendation"
              className="text-gray-400 underline hover:text-gray-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              рекомендательные технологии
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
