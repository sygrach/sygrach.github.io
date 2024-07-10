import {
  Square3Stack3DIcon,
  MinusCircleIcon,
  AdjustmentsVerticalIcon,
  ClockIcon,
  ArrowUpTrayIcon,
  VideoCameraIcon
} from '@heroicons/react/24/outline'

import Feature from './elements/feature';

export default function Example() {
  const iconProps: Record<string, string> = { className: "h-6 w-6 text-white", 'aria-hidden': "true" };
  
  return (
    <div id="features" className="bg-white py-8 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-base font-semibold leading-7 text-indigo-600">Быстро, качественно, удобно</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Всё, что нужно, для работы с&nbsp;музыкой
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Загрузите mp3-файл или отправьте ссылку и&nbsp;наслаждайтесь результатом
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <Feature
              name='Выделение отдельных инструментов'
              icon={ <Square3Stack3DIcon { ...iconProps } /> }
              description="Выделить из песни вокал, аккомпанемент, гитару, ударные, пианино или бас. Послушайте отдельно от трека, можно использовать для музыкальных занятий."
            />
            <Feature
              name='Удаление выбранного инструмента'
              icon={ <MinusCircleIcon  { ...iconProps } /> }
              description="Создать минусовку или версию песни для караоке без вокала. Получить трек без выбранного инструмента (гитары, ударных, пианино или баса)."
            />
            <Feature
              name='Изменение тональности'
              icon={ <AdjustmentsVerticalIcon { ...iconProps } />}
              description="Повысить или понизить тональность песни. Настройте тональность под свой голос."
            />
            <Feature
              name='Добавление метронома'
              icon={ <ClockIcon { ...iconProps } />}
              description={ <>Наложить метроном на трек. Создадим две версии: песня с метрономом и песня с затактом. Подходит для обучения и отработки.</> }
            />
            <Feature
              name='Загрузка собственного трека'
              icon={ <ArrowUpTrayIcon { ...iconProps } />}
              description={ <>Обработать любую песню, отправив <span className="text-nowrap">mp3-файл</span>. Можно отправить свой трек, недоступный в интернете.</> }
            />
            <Feature
              name='Обработка трека по ссылке на Youtube'
              icon={ <VideoCameraIcon { ...iconProps } />}
              description={ <>Быстро обработать музыку. Пришлите ссылку на Youtube видео, чтобы выделить инструмент или создать минусовку по Youtube клипу.</> }
            />
          </dl>
        </div>
      </div>
    </div>
  )
}