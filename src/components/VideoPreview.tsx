"use client";

import { useRef, useEffect } from "react";

interface VideoPreviewProps {
  src: string;
  poster?: string;
  className?: string;
}

export default function VideoPreview({
  src,
  poster,
  className = "",
}: VideoPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      poster={poster}
      className={`w-full h-full object-cover ${className}`}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
