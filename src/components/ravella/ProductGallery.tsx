import { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type GalleryImage = { src: string; alt: string; title?: string; caption?: string };

export function ProductGallery({ images }: { images: GalleryImage[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <div className="mx-auto w-full max-w-xl">
      <Carousel
        setApi={setApi}
        className="relative"
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
      >
        <CarouselContent>
          {images.map((img) => (
            <CarouselItem key={img.src}>
              <img
                src={img.src}
                alt={img.alt}
                width={1000}
                height={900}
                className="mx-auto w-full"
              />
                            {img.caption && (
                <div className="mx-auto mt-4 flex min-h-[220px] max-w-md flex-col justify-center px-2 text-center">
                  {img.title && (
                    <h3 className="font-display text-xl font-extrabold text-primary">
                      {img.title}
                    </h3>
                  )}
                  <p className="mt-3 text-base font-medium leading-relaxed text-foreground/85">
                    {img.caption}
                  </p>
                </div>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-3 border-none bg-primary text-primary-foreground opacity-90 hover:bg-primary hover:opacity-100" />
        <CarouselNext className="right-3 border-none bg-primary text-primary-foreground opacity-90 hover:bg-primary hover:opacity-100" />
      </Carousel>

      <div className="mt-3 flex justify-center gap-2">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            aria-label={`Go to image ${i + 1}`}
            onClick={() => api?.scrollTo(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === current ? "bg-primary" : "bg-primary/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}