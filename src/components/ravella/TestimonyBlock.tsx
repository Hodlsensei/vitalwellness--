import { VideoCard } from "./VideoCard";

type TestimonyItem = { title: string; youtubeId?: string; src?: string };

export function TestimonyBlock({
  heading,
  items,
}: {
  heading: string;
  items: TestimonyItem[];
}) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-10">
      <h2 className="rounded-md bg-cream px-6 py-4 text-center font-display text-2xl font-extrabold uppercase text-primary sm:text-3xl">
        {heading}
      </h2>
      <p className="mt-4 text-center text-sm font-medium text-alert">
        See what verified customers have shared about their experiences with Ravella
      </p>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <VideoCard key={item.youtubeId ?? item.src} {...item} />
        ))}
      </div>
    </section>
  );
}
