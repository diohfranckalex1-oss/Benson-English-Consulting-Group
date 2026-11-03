import React, { useRef, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, RotateCcw } from 'lucide-react';
import { Language } from '../types';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

const baseUrl = import.meta.env.BASE_URL || '/';
export const BECG_VIDEO_PATH = baseUrl.endsWith('/')
  ? `${baseUrl}assets/aistudio/lv_7657825228218813717_20261102214120_bac21a02.mp4`
  : `${baseUrl}/assets/aistudio/lv_7657825228218813717_20261102214120_bac21a02.mp4`;

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, lang }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isMuted, setIsMuted] = React.useState(false);

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
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {
          // Autoplay policy might require mute
          setIsMuted(true);
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => {});
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
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const restartVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-w-sm w-full max-h-[92vh] bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700/80 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="p-3 px-4 bg-[#10264F] text-white flex items-center justify-between shrink-0 z-10">
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
            playsInline
            controls={false}
            loop
            preload="auto"
            onClick={togglePlay}
            className="w-full h-full object-contain cursor-pointer"
          />

          {/* Floating play/pause indicator on tap */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#D71935]/90 hover:bg-[#D71935] text-white flex items-center justify-center shadow-xl transition-transform hover:scale-110"
              aria-label="Lire la vidéo"
            >
              <Play className="w-8 h-8 fill-current ml-1" />
            </button>
          )}

          {/* Bottom custom controls */}
          <div className="absolute bottom-3 inset-x-3 p-2 rounded-xl bg-slate-950/70 backdrop-blur-xs flex items-center justify-between text-white text-xs">
            <button
              onClick={togglePlay}
              className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              title={isPlaying ? 'Pause' : 'Lecture'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
            </button>

            <button
              onClick={restartVideo}
              className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              title="Recommencer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={toggleMute}
              className="p-1.5 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-1"
              title={isMuted ? 'Activer le son' : 'Couper le son'}
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4 h-4 text-red-400" />
                  <span className="text-[10px] text-red-300">Son coupé</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-[10px] text-emerald-300">Son actif</span>
                </>
              )}
            </button>

            <span className="text-[11px] text-slate-300 font-mono">0:22</span>
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
