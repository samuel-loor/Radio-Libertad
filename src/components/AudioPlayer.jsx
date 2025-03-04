import '../assets/css/audio-player.css';
import { useEffect, useState, useRef } from 'react';

import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const playPauseBtnRef = useRef(null);
  const muteBtnRef = useRef(null);
  const volumeSliderRef = useRef(null);
  const [bars, setBars] = useState(Array(12).fill(10));

  let animationInterval;

  const handlePlayPause = () => {
    const audio = audioRef.current;

    if (audio.paused) {
      audio.load();
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false)
    }
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    audioRef.current.volume = e.target.value;
  };

  const handleMuteToggle = () => {
    const audio = audioRef.current;

    if (audio.volume > 0) {
      setIsMuted(true);
      audio.volume = 0;
    } else {
      setIsMuted(false);
      audio.volume = volume;
    }
  };

  const startEqualizerAnimation = () => {
    animationInterval = setInterval(() => {
      setBars(bars.map(() => Math.floor(Math.random() * 40) + 10));
    }, 200);
  };

  const stopEqualizerAnimation = () => {
    clearInterval(animationInterval);
    setBars(Array(12).fill(10));
  };

  useEffect(() => {
    if (isPlaying) {
      startEqualizerAnimation();
    } else {
      stopEqualizerAnimation();
    }

    return () => clearInterval(animationInterval);
  },[isPlaying]);

  useEffect(() => {
    const toggleAudioHandler = () => {
      handlePlayPause(); // Llama la función para alternar reproducción
    };

    window.addEventListener('toggle-audio', toggleAudioHandler);
    return () => {
      window.removeEventListener('toggle-audio', toggleAudioHandler);
    };
  }, []);

  return (
    <section className='audio_player'>
      <div className='player_info'>
        <div
          className='status_indicator'
          role='status'
          aria-label='Estado de la transmisión'
        ></div>
        <span className='radio_status'>Escuchando Radio Libertad</span>
      </div>
      <audio
        className='audio'
        ref={audioRef}
        preload='none'
        src='https://stream.zeno.fm/p5tdruzh408uv'
      >
        Tu navegador no soporta el elemento de audio.
      </audio>
      <div className='controls'>
        <button
          className='play_pause'
          onClick={handlePlayPause}
          aria-label='Reproducir/Pausar'
          ref={playPauseBtnRef}
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button
          className='mute'
          onClick={handleMuteToggle}
          aria-label='Silenciar/Activar sonido'
          ref={muteBtnRef}
        >
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
        <input
          type='range'
          className='volume'
          min='0'
          max='1'
          step='0.1'
          value={volume}
          onInput={handleVolumeChange}
          aria-label='Control de volumen'
          ref={volumeSliderRef}
        />
      </div>
      <div className='equalizer' aria-hidden='true'>
        {bars.map((bar, index) => (
          <div className='bar' key={index} style={{ height: `${bar}px` }}></div>
        ))}
      </div>
    </section>
  );
}
