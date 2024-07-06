const CTA = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 pb-16 shadow-2xl sm:rounded-3xl sm:px-16 lg:pb-0 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto text-center lg:mx-0 lg:flex-auto lg:py-32">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Воспользуйтесь ботом Сыграч уже сейчас
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Вы можете загрузить аудио, выбрать нужный вариант обработки и получить обработанный трек.<br />
              Бот доступен бесплатно в Telegram.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://t.me/sygrach_bot"
                target='_blank'
                className="px-5 py-3 text-base font-medium text-center inline-flex items-center rounded-lg hover:cursor-pointer text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200"
              >
                Запустить бота
                <svg className="w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 100 100">
                  <path className="st117" d="M88.723,12.142C76.419,17.238,23.661,39.091,9.084,45.047c-9.776,3.815-4.053,7.392-4.053,7.392    s8.345,2.861,15.499,5.007c7.153,2.146,10.968-0.238,10.968-0.238l33.62-22.652c11.922-8.107,9.061-1.431,6.199,1.431    c-6.199,6.2-16.452,15.975-25.036,23.844c-3.815,3.338-1.908,6.199-0.238,7.63c6.199,5.246,23.129,15.976,24.082,16.691    c5.037,3.566,14.945,8.699,16.452-2.146c0,0,5.961-37.435,5.961-37.435c1.908-12.637,3.815-24.321,4.053-27.659    C97.307,8.804,88.723,12.142,88.723,12.142z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA;