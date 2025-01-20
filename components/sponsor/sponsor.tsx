import google from "@/assets/google.jpeg";
import samsung from "@/assets/samsung.jpeg";
import nextflix from "@/assets/nextflix.jpeg";
import logitech from "@/logitech.jpeg";
import spotify from "@/assets/spotify.jpeg";
import amazon from "@/assets/amazon.jpeg";
import Image from "next/image";

export default function Sponsor() {
  const images = [google, samsung, nextflix, logitech, spotify, amazon];

  return (
    <div className="w-full h-[39.42px] md:h-[129px] flex gap-8 lg:gap-40 items-end justify-center ">
      {images.map((image) => (
        <Image
          className="w-[33.67px] lg:w-[120px] lg:h-[40.55px] h-[11.07px] saturate-0 "
          key={image.src}
          alt=""
          src={image}
        />
      ))}
    </div>
  );
}
