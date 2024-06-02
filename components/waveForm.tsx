import { useRef, useCallback, useEffect, type FC } from 'react';
import { useWavesurfer } from '@wavesurfer/react'
import { PlayIcon, PauseIcon } from '@heroicons/react/24/outline'

interface WaveFormProps {
  url: string;
  name: string;
  isPlaying: boolean;
  onPlayPause?: () => void;
}

const WaveForm:FC<WaveFormProps> = ({ url, name, isPlaying, onPlayPause }) => {
  const containerRef = useRef(null);

  const { wavesurfer, isPlaying: isWavePlaying } = useWavesurfer({
    container: containerRef,
    height: 100,
    waveColor: '#3e3ec9',
    progressColor: '#2d2d8c',
    barWidth: 3,
    url
  });

  useEffect(()  => {
    if (wavesurfer && isWavePlaying && !isPlaying) {
      wavesurfer.pause();
    } 
  }, [wavesurfer, isPlaying]);

  const onClickPlayPause = useCallback(() => {
    wavesurfer && wavesurfer.playPause();
    onPlayPause && onPlayPause();
  }, [wavesurfer]);

  return (
    <div className="flex flex-col mt-8 items-center justify-center">
      <p className="text-lg font-semi">{ name }</p>
      <div className="flex items-center justify-center w-full mt-4">
        <button type='button' onClick={onClickPlayPause} className="rounded-full bg-indigo-600 p-3 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <span className="sr-only">Play/Pause</span>
          {
            isPlaying
              ? <PauseIcon className="h-6 w-6" aria-hidden="true"/>
              : <PlayIcon className="h-6 w-6" aria-hidden="true"/>
          }
        </button>
        <div ref={ containerRef } className="w-full max-w-lg ml-8" />
      </div>
    </div>
  )
};

export default WaveForm;