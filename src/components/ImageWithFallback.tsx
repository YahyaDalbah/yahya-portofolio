import { useState } from "react";
import { ImageIcon } from "lucide-react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  label?: string;
  className?: string;
}

/**
 * Renders the image at its natural aspect ratio (never cropped); if the file
 * is missing, shows a styled gradient placeholder so the layout looks
 * intentional before screenshots are added.
 */
export default function ImageWithFallback({
  src,
  alt,
  label,
  className = "",
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex aspect-[16/9] w-full items-center justify-center bg-gradient-to-br from-accent/25 via-surface to-accent-2/20 ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="flex flex-col items-center gap-3 p-8 text-center">
          <ImageIcon className="h-8 w-8 text-white/40" aria-hidden />
          <span className="text-sm font-medium text-white/60">
            {label ?? alt}
          </span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`h-auto w-full ${className}`}
    />
  );
}
