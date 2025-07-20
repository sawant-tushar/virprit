import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImage1 from "@assets/IMG-20250712-WA0012_1752494051440.jpg";
import heroImage2 from "@assets/Pic.jpg";
import heroImage3 from "@assets/IMG-20250712-WA0015_1752494051441.jpg";
import heroImage4 from "@assets/IMG-20250712-WA0017_1752494051442.jpg";
import heroImage5 from "@assets/IMG-20250712-WA0018_1752494051442.jpg";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      src: heroImage1,
      alt: "Professional printing and packaging solutions for pharmaceutical industry"
    },
    {
      src: heroImage2,
      alt: "High-quality packaging boxes and labels for consumer goods"
    },
    {
      src: heroImage3,
      alt: "Custom business stationery and promotional materials"
    },
    {
      src: heroImage4,
      alt: "printing equipment and technology"
    },
    {
      src: heroImage5,
      alt: "Quality control and packaging processes"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
      ))}

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in text-white drop-shadow-lg">
          Printing & Packaging You Can Trust
        </h1>
        {/* <p className="text-xl md:text-2xl mb-8 fade-in text-white drop-shadow-md">
          Sweet Boxes • Pharmaceutical • Food Packaging • Labels • Tags
        </p> */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
            <Link href="/contact">Get a Quote</Link>
          </Button>
          <Button asChild size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent">
            <Link href="/services">See Services</Link>
          </Button>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
          />
        ))}
      </div>
    </section>
  );
}
