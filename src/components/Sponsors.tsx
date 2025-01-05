import React from "react";
import Image from "next/image";

const sponsorsImages = [
  { id: 1, src: "/images/sponsors/Airbnb.png", alt: "Airbnb" },
  { id: 2, src: "/images/sponsors/Booking.png", alt: "Booking" },
  { id: 3, src: "/images/sponsors/tiket.com.png", alt: "Ticket" },
  { id: 4, src: "/images/sponsors/Traveloka.png", alt: "Traveloka" },
  { id: 5, src: "/images/sponsors/Tripadvisor.png", alt: "Tripadvisor" },
];

const Sponsors: React.FC = () => {
  return (
    <div className="px-4 py-8 mb-16">
      <div className="overflow-hidden relative">
        <div className="flex animate-scroll will-change-transform">
          {sponsorsImages.map((sponsor) => (
            <div key={sponsor.id} className="flex-shrink-0 px-8 py-4 flex justify-center items-center">
              <Image
                src={sponsor.src}
                alt={sponsor.alt}
                width={210}
                height={32}
                className="object-contain"
                loading="lazy"
              />
            </div>
          ))}
          {sponsorsImages.map((sponsor) => (
            <div key={`duplicate-${sponsor.id}`} className="flex-shrink-0 px-8 py-4 flex justify-center items-center">
              <Image
                src={sponsor.src}
                alt={sponsor.alt}
                width={200}
                height={32}
                className="object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
