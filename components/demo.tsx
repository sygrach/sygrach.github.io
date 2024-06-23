'use client'

import { useState } from 'react';

import WaveForm from './elements/waveForm';
import Dropdown from './elements/dropdown';

interface IDemoAudioMap {
  name: string;
  url: string;
}

const DEMO_AUDIO: Record<string, IDemoAudioMap> = {
  original: {
    name: 'Оригинал',
    url: '/audio/example_original.mp3'
  },
  without_drums: {
    name: 'Без барабанов',
    url: '/audio/example_without_drums.mp3'
  },
  without_vocal: {
    name: 'Без вокала',
    url: '/audio/example_without_vocal.mp3'
  },
  accomponiment: {
    name: 'Аккомпанемент',
    url: '/audio/example_other.mp3'
  },
};

export default function Demo() {
  const [selectedAudioKey, setSelectedAudioKey] = useState<string>('original');

  const selectedAudio = DEMO_AUDIO[selectedAudioKey];

  return (
    <div id="demo" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Как это звучит</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            В&nbsp;качестве демонстрации представлена композиция<br />Chasing Dreams&nbsp;&mdash; Jim Yosef &amp;&nbsp;Valentina Franco [NCS release]
          </p>
        </div>
        <div className="flex items-center flex-col gap-8 mt-20 mx-auto max-w-2xl min-h-28">
          <Dropdown
            id="audioDemo"
            selectedValue={ selectedAudio.name }
            items={Object.entries(DEMO_AUDIO).map(([key, value]) => ({ value: key, name: value.name })) }
            onSelect={ nextValue => setSelectedAudioKey(nextValue) }
          />
          <WaveForm url={ selectedAudio.url } />
        </div>
      </div>
    </div>
  )
}
