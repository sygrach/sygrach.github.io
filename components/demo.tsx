'use client'

import { useState, useEffect } from 'react';

import WaveForm from './elements/waveForm';
import Dropdown from './elements/dropdown';

interface IDemoAudioMap {
  name: string;
  textWithout: string;
  textOnly: string;
  urlWithout: string;
  urlOnly: string;
}

const DEMO_ORIGINAL_URL = '/audio/demo_original.mp3';

const DEMO_AUDIO_BY_TYPE: Record<string, IDemoAudioMap> = {
  vocal: {
    name: 'Вокал',
    textWithout: 'Без вокала',
    textOnly: 'Только вокал',
    urlWithout: '/audio/demo_vocal_without.mp3',
    urlOnly: '/audio/demo_vocal_only.mp3'
  },
  drums: {
    name: 'Барабаны',
    textWithout: 'Без барабанов',
    textOnly: 'Только барабаны',
    urlWithout: '/audio/demo_drums_without.mp3',
    urlOnly: '/audio/demo_drums_only.mp3'
  },
  bass: {
    name: 'Басс',
    textWithout: 'Без басса',
    textOnly: 'Только басс',
    urlWithout: '/audio/demo_bass_without.mp3',
    urlOnly: '/audio/demo_bass_only.mp3'
  },
  drums_and_bass: {
    name: 'Барабаны и басс',
    textWithout: 'Без барабанов и басса',
    textOnly: 'Только барабаны и басс',
    urlWithout: '/audio/demo_drums_and_bass_without.mp3',
    urlOnly: '/audio/demo_drums_and_bass_only.mp3'
  },
  guitar: {
    name: 'Гитара',
    textWithout: 'Без гитары',
    textOnly: 'Только гитара',
    urlWithout: '/audio/demo_guitar_without.mp3',
    urlOnly: '/audio/demo_guitar_only.mp3'
  },
  piano: {
    name: 'Пианино',
    textWithout: 'Без пианино',
    textOnly: 'Только пианино',
    urlWithout: '/audio/demo_piano_without.mp3',
    urlOnly: '/audio/demo_piano_only.mp3'
  },
  accomponiment: {
    name: 'Аккомпанемент',
    textWithout: 'Без аккомпанемента',
    textOnly: 'Только аккомпанемент',
    urlWithout: '/audio/demo_accompaniment_without.mp3',
    urlOnly: '/audio/demo_accompaniment_only.mp3'
  }
};

export default function Demo() {
  const [selectedType, setSelectedType] = useState<string>('vocal');
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);

  const selectedAudio = DEMO_AUDIO_BY_TYPE[selectedType];

  const onPlayPause = (audio: string) => () => {
    setPlayingAudio((prevAudio: string | null) => prevAudio === audio ? null : audio);
  };

  const onChangeAudioType = (nextType: string) => {
    setSelectedType(nextType);
    setPlayingAudio((prevAudio: string | null) => prevAudio === 'original' ? 'original' : null);
  };

  return (
    <div id="demo" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Как это звучит</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            В&nbsp;качестве демонстрации представлена композиция &laquo;Clarx &amp;&nbsp;Shiah Maisel&nbsp;&mdash; Round N&rsquo; Round&raquo;
          </p>
        </div>
        <div className="flex items-center flex-col gap-8 mt-14 mx-auto max-w-2xl min-h-28">
          <Dropdown
            id="audioDemo"
            selectedValue={ selectedAudio.name }
            items={ Object.entries(DEMO_AUDIO_BY_TYPE).map(([key, value]) => ({ value: key, name: value.name })) }
            onSelect={ onChangeAudioType }
          />
          <div className='w-full grid grid-cols-1 lg:grid-cols-[210px_minmax(0,_1fr)] items-center gap-8'>
            <p className='min-w-max text-center lg:text-left'>Оригинал</p>
            <WaveForm url={ DEMO_ORIGINAL_URL } playing={ playingAudio === 'original' } onPlayPause={ onPlayPause('original') } />
            <p className='min-w-max text-center lg:text-left'>{ selectedAudio.textWithout }</p>
            <WaveForm url={ selectedAudio.urlWithout } playing={ playingAudio === 'urlWithout' } onPlayPause={ onPlayPause('urlWithout') }  />
            <p className='min-w-max text-center lg:text-left'>{ selectedAudio.textOnly }</p>
            <WaveForm url={ selectedAudio.urlOnly } playing={ playingAudio === 'urlOnly' } onPlayPause={ onPlayPause('urlOnly') } />
          </div>
        </div>
      </div>
    </div>
  )
}
