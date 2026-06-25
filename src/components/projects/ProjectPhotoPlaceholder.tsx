import { Camera } from 'lucide-react';

interface ProjectPhotoPlaceholderProps {
  className?: string;
}

export function ProjectPhotoPlaceholder({ className = '' }: ProjectPhotoPlaceholderProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative h-full w-full overflow-hidden bg-zinc-950 ${className}`}
    >
      <div className="absolute inset-6 border border-edg-brand/25" />
      <div className="absolute inset-x-10 top-10 h-px bg-edg-brand/35" />
      <div className="absolute inset-x-10 bottom-10 h-px bg-edg-brand/35" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center border border-edg-brand/40 bg-edg-brand/10 text-edg-brand">
          <Camera className="h-7 w-7" />
        </div>
      </div>
    </div>
  );
}
