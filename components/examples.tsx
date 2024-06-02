'use client'

import { useState } from 'react';

import WaveForm from './waveForm';
import { log } from 'console';

const audioExamples  = [
  {
    name: 'Оригинал',
    url: '/audio/example.wav'
  },
  {
    name: 'Без барабанов',
    url: '/audio/example.wav'
  },
  {
    name: 'Без вокала',
    url: '/audio/example.wav'
  },
  {
    name: 'Без гитары',
    url: '/audio/example.wav'
  },
];

export default function Examples() {
  const [playingIndex, setPlayingIndex] = useState<number|null>(null);

  const onPlayPause = (index: number) =>  {
    setPlayingIndex(current => current === index ? null : index);
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Как это звучит</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        {
          audioExamples.map((example, index) => (
            <WaveForm
              key={index}
              name={ example.name }
              url={ example.url }
              isPlaying={ playingIndex === index  }
              onPlayPause={ () => onPlayPause(index) }
            />
          ))
        }
      </div>
    </div>
  )
}
