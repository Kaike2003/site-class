import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import google from "@/public/assets/google.jpeg";
import samsung from "@/public/assets/samsung.jpeg";
import netflix from "@/public/assets/nextflix.jpeg";
import logitech from "@/public/assets/logitech.jpeg";
import spotify from "@/public/assets/spotify.jpeg";
import amazon from "@/public/assets/amazon.jpeg";

const reviews = [
  {
    blurDataURL: google.blurDataURL,
    blurHeight: google.blurHeight,
    blurWidth: google.blurWidth,
    width: google.width,
    src: google.src,
    height: google.height,
    name: "Google",
  },
  {
    blurDataURL: samsung.blurDataURL,
    blurHeight: samsung.blurHeight,
    blurWidth: samsung.blurWidth,
    width: samsung.width,
    src: samsung.src,
    height: samsung.height,
    name: "Samsung",
  },
  {
    blurDataURL: spotify.blurDataURL,
    blurHeight: spotify.blurHeight,
    blurWidth: spotify.blurWidth,
    width: spotify.width,
    src: spotify.src,
    height: spotify.height,
    name: "Spotify",
  },
  {
    blurDataURL: amazon.blurDataURL,
    blurHeight: amazon.blurHeight,
    blurWidth: amazon.blurWidth,
    width: amazon.width,
    src: amazon.src,
    height: amazon.height,
    name: "Amazon",
  },
  {
    blurDataURL: logitech.blurDataURL,
    blurHeight: logitech.blurHeight,
    blurWidth: logitech.blurWidth,
    width: logitech.width,
    src: logitech.src,
    height: logitech.height,
    name: "Logitech",
  },
  {
    blurDataURL: netflix.blurDataURL,
    blurHeight: netflix.blurHeight,
    blurWidth: netflix.blurWidth,
    width: netflix.width,
    src: netflix.src,
    height: netflix.height,
    name: "Netflix",
  },
];

//const firstRow = reviews.slice(0, reviews.length / 2);
//const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ name }: { name: string }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="w-full items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight text-center">{name}</h1>
        </div>
      </div>
    </figure>
  );
};

export function CaroucelIcons() {
  return (
    <div className="relative flex h-[129px] w-full flex-col items-center justify-end overflow-hidden bg-background">
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
