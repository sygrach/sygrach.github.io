import {
  Square3Stack3DIcon,
  MinusCircleIcon,
  ClockIcon,
  AdjustmentsVerticalIcon
} from '@heroicons/react/24/outline'

import Feature from './elements/feature';

export default function Example() {
  const iconProps: Record<string, string> = { className: "h-6 w-6 text-white", 'aria-hidden': "true" };
  
  return (
    <div className="bg-white py-8 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-base font-semibold leading-7 text-indigo-600">Быстро, качественно, удобно</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Всё, что нужно для работы с музыкой
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Загрузите mp3-файл и наслаждайтесь результатом
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <h3 className='max-w-xl text-xl font-semibold mb-8'>Доступно вместе с запуском:</h3>
          <ul className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <Feature
              name='Выделение отдельных инструментов'
              icon={ <Square3Stack3DIcon { ...iconProps } /> }
            />
            <Feature
              name='Удаление выбранного инструмента'
              icon={ <MinusCircleIcon  { ...iconProps } /> }
            />
          </ul>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <h3 className='max-w-xl text-xl font-semibold mb-8'>Будет доступно в следующей версии:</h3>
          <ul className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <Feature
              name='Дабовление метронома'
              icon={ <ClockIcon { ...iconProps } />}
            />
            <Feature
              name='Изменение тональности'
              icon={ <AdjustmentsVerticalIcon { ...iconProps } />}
            />
          </ul>
        </div>
      </div>
    </div>
  )
}