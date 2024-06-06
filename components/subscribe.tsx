import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline'

export default function Subscribe() {
  return (
    <div id="subscribe" className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-7xl lg:max-w-2lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Подписаться на Telegram Канал</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Следите на новостями, чтобы получить доступ к продукту в числе первых пользователей.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center">
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://t.me/sygrach"
                className="w-54 h-54 rounded-2xl bg-white"
              >
                <img
                  src='/tg_sygrach_qrcode.png'
                  alt='QR-код на Telegram канал'
                  className="w-48 h-48"
                />
              </a>
              <a
                rel="noreferrer noopener"
                target="_blank"
                href="https://t.me/sygrach"
                className="mt-10 flex justify-center text-white font-semibold text-2xl tracking-wider"
              >
                t.me/sygrach
              </a>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-center justify-center">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="mt-4 font-semibold text-white">Актуальные новости<br /> о новом функционале</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="mt-4 font-semibold text-white">Отсутствие спама</p>
            </div>
          </dl>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  )
}
