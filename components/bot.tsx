import { MusicalNoteIcon, ComputerDesktopIcon, DevicePhoneMobileIcon} from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Ваши аудиозаписи.',
    description: 'Загружайте свои mp3-файлы, пересылайте аудио из сообщений или присылайте ссылку на Youtube. Результатом можно быстро поделиться с друзьями.',
    icon: MusicalNoteIcon,
  },
  {
    name: 'Удобный интерфейс.',
    description: 'Сыграч доступен в Telegram для любых устройств (программа на компьютер, веб-сайт, мобильное приложение).',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Всегда под рукой.',
    description:
      'Пользуйтесь инструментом тогда, когда вам удобно, готовые аудиозаписи всегда с вами.',
    icon: DevicePhoneMobileIcon,
  },
]

const Bot = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid items-center max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:max-w-lg">
            <a href="https://t.me/sygrach_bot" target='_blank' className="text-base font-semibold leading-7 text-indigo-600">t.me/sygrach_bot</a>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Почему Telegram бот</h2>
            
            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                    {feature.name}
                  </dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>

          </div>
          <picture>
            <source srcSet="/demo_2.webp" type="image/webp" />
            <img
              className="w-[32rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[50rem] md:-ml-4 lg:-ml-0"
              src="/demo_2.png"
              alt="Демонстрация Telegram бота Сыграч"
              width={2134}
              height={1798}
            />
          </picture>
        </div>
      </div>
    </div>
  )
}

export default Bot;