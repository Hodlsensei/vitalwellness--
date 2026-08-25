type VideoCardProps = {
  title: string;
  /** YouTube video id, e.g. "dQw4w9WgXcQ" */
  youtubeId?: string;
  /** Local video file, e.g. imported from src/assets */
  src?: string;
};

export function VideoCard({ title, youtubeId, src }: VideoCardProps) {
  return (
    <article className="rounded-xl border border-leaf/40 bg-mint p-3">
      <h3 className="rounded-lg bg-[oklch(0.42_0.09_140)] px-4 py-4 text-center font-display text-sm font-bold text-primary-foreground">
        {title}
      </h3>
      <div className="mt-3 aspect-video w-full overflow-hidden rounded-lg bg-black">
        {src ? (
          <video className="h-full w-full" src={src} controls preload="metadata" />
        ) : (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </article>
  );
}
