import { useRef, useCallback, memo, type FC } from 'react';
import { useWavesurfer } from '@wavesurfer/react'
import { PlayIcon, PauseIcon } from '@heroicons/react/24/outline'

interface WaveFormProps {
  url: string;
}

const WaveForm:FC<WaveFormProps> = ({ url }) => {
  const containerRef = useRef(null);

  const { wavesurfer, isPlaying, isReady } = useWavesurfer({
    container: containerRef,
    height: 110,
    waveColor: '#3e3ec9',
    progressColor: '#2d2d8c',
    barWidth: 3,
    autoplay: false,
    url
  });

  const onClickPlayPause = useCallback(() => {
    wavesurfer && wavesurfer.playPause();
  }, [wavesurfer]);

  const skeletonClass = isReady ? '' : 'h-28 animate-pulse bg-gray-300 rounded-full w-full';

  return (
    <div className="flex items-center justify-center w-full mt-4 min-h-28">
      <button type='button' onClick={onClickPlayPause} className="rounded-full bg-indigo-600 p-3 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        <span className="sr-only">Play/Pause</span>
        {
          isPlaying
            ? <PauseIcon className="h-6 w-6" aria-hidden="true"/>
            : <PlayIcon className="h-6 w-6" aria-hidden="true"/>
        }
      </button>
      <div ref={ containerRef } className={ `w-full ml-8 ${ skeletonClass }` } />
    </div>
  )
};

export default memo(WaveForm);