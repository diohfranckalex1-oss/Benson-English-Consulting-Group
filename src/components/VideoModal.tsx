import React, { useRef, useEffect, useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, RotateCcw, Loader2 } from 'lucide-react';
import { Language } from '../types';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

const baseUrl = import.meta.env.BASE_URL || '/';
const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;

export const BECG_VIDEO_PATH = `${cleanBaseUrl}assets/aistudio/becg_promo_reel_optimized.mp4`;
export const BECG_POSTER_PATH = `${cleanBaseUrl}assets/aistudio/becg_video_poster.jpg`;

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, lang }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTimeText, setCurrentTimeText] = useState('0:00');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      setIsPlaying(true);
      setIsBuffering(true);
      setProgress(0);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current
          .play()
          .then(() => {
            setIsBuffering(false);
            setIsPlaying(true);
          })
          .catch(() => {
            // Browsers autoplay policy often requires initial muted playback
            setIsMuted(true);
            if (videoRef.current) {
              videoRef.current.muted = true;
              videoRef.current
                .play()
                .then(() => {
                  setIsBuffering(false);
                  setIsPlaying(true);
                })
                .catch(() => {
                  setIsBuffering(false);
                  setIsPlaying(false);
                });
            }
          });
      }
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMuted = !videoRef.current.muted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  const restartVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {});
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration || 22;
    setProgress((current / duration) * 100);
    const secs = Math.floor(current % 60);
    setCurrentTimeText(`0:${secs < 10 ? '0' : ''}${secs}`);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-w-sm w-full max-h-[92vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700/80 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="p-3 px-4 bg-[#10264F] text-white flex items-center justify-between shrink-0 z-10 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D71935] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-100">
              {lang === 'fr' ? 'Spot Vidéo Officiel BECG' : 'Official BECG Promo Spot'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Fermer la vidéo"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-[9/16] max-h-[calc(92vh-100px)] bg-black flex items-center justify-center overflow-hidden group">
          <video
            ref={videoRef}
            src={BECG_VIDEO_PATH}
            poster={BECG_POSTER_PATH}
            playsInline
            controls={false}
            loop
            preload="auto"
            onClick={togglePlay}
            onTimeUpdate={handleTimeUpdate}
            onWaiting={() => setIsBuffering(true)}
            onPlaying={() => {
              setIsBuffering(false);
              setIsPlaying(true);
            }}
            onCanPlay={() => setIsBuffering(false)}
            className="w-full h-full object-contain cursor-pointer"
          />

          {/* Buffering spinner */}
          {isBuffering && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-xs pointer-events-none z-20">
              <Loader2 className="w-10 h-10 text-white animate-spin drop-shadow" />
              <span className="text-xs text-white/90 mt-2 font-medium tracking-wide">
                {lang === 'fr' ? 'Chargement fluide…' : 'Loading stream…'}
              </span>
            </div>
          )}

          {/* Floating play indicator when paused and not buffering */}
          {!isPlaying && !isBuffering && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#D71935]/95 hover:bg-[#D71935] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 cursor-pointer z-20"
              aria-label="Lire la vidéo"
            >
              <Play className="w-8 h-8 fill-current ml-1" />
            </button>
          )}

          {/* Bottom custom controls */}
          <div className="absolute bottom-2 inset-x-2.5 p-2 rounded-xl bg-slate-950/80 backdrop-blur-md flex flex-col gap-1.5 text-white text-xs z-20 shadow-lg border border-white/10">
            {/* Timeline progress line */}
            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#D71935] transition-all duration-150 ease-linear rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <button
                  onClick={togglePlay}
                  className="p-1.5 rounded-lg hover:bg-white/15 transition-colors cursor-pointer"
                  title={isPlaying ? 'Pause' : 'Lecture'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                </button>

                <button
                  onClick={restartVideo}
                  className="p-1.5 rounded-lg hover:bg-white/15 transition-colors cursor-pointer"
                  title="Recommencer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="p-1.5 rounded-lg hover:bg-white/15 transition-colors flex items-center gap-1 cursor-pointer"
                  title={isMuted ? 'Activer le son' : 'Couper le son'}
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-4 h-4 text-red-400" />
                      <span className="text-[10px] text-red-300 font-medium">Muet</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-[10px] text-emerald-300 font-medium">Son ON</span>
                    </>
                  )}
                </button>

                <span className="text-[11px] text-slate-300 font-mono tracking-wider">
                  {currentTimeText} / 0:22
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Caption bottom bar */}
        <div className="p-3 bg-slate-900 border-t border-slate-800 text-center">
          <p className="text-xs text-slate-300 font-medium">
            {lang === 'fr'
              ? 'Benson English Consulting Group · Bouaké, Côte d’Ivoire'
              : 'Benson English Consulting Group · Bouaké, Côte d’Ivoire · Official Promo'}
          </p>
        </div>
      </div>
    </div>
  );
};
