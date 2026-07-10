"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import AuthenticateSkillsSection from "@/components/authenticate-skills-section";
import WhyChooseSection from "@/components/why-choose-section";
import LoginSection from "@/components/login-section";
import TestimonialsSection from "@/components/testimonials-section";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const totalSlides = 4;

  const bannerData = [
    {
      src: "/images/homepage/Carousel/SkillLibrary.jpg",
      alt: "Skill Library",
      title: "The World's Largest Skill Assessment Library",
      description: "Access thousands of assessments across various domains",
      titleStyle:
        "text-5xl md:text-6xl lg:text-7xl font-semibold tracking-wide",
      descStyle: "text-lg md:text-xl font-medium",
    },
    {
      src: "/images/homepage/Carousel/SecureCenter.jpg",
      alt: "Secure Center",
      title: "Assessements in Secure Centers",
      description: "Take your assessments in our certified secure facilities",
      titleStyle:
        "text-5xl md:text-6xl lg:text-7xl font-semibold tracking-wide",
      descStyle: "text-lg md:text-xl font-medium",
    },
    {
      src: "/images/homepage/Carousel/PickLaptop.jpg",
      alt: "Pick Laptop",
      title: "Say Goodbye to Technical Interviews!",
      description: "Choose from multiple assessment formats and schedules",
      titleStyle:
        "text-5xl md:text-6xl lg:text-7xl font-semibold tracking-wide",
      descStyle: "text-lg md:text-xl font-medium",
    },
    {
      src: "/images/homepage/Carousel/DriversLicense.jpg",
      alt: "Drivers License",
      title: "Candidate Authentication Eliminating Fraud",
      description: "Earn recognized certifications for your career growth",
      titleStyle:
        "text-5xl md:text-6xl lg:text-7xl font-semibold tracking-wide",
      descStyle: "text-lg md:text-xl font-medium",
    },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        const nextSlide = (currentSlide + 1) % totalSlides;
        setCurrentSlide(nextSlide);
        scrollToSlide(nextSlide);
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentSlide, isAutoPlaying]);

  const scrollToSlide = (index: number) => {
    if (sliderRef.current) {
      const slideWidth = window.innerWidth;
      sliderRef.current.scrollTo({
        left: index * slideWidth,
        behavior: "smooth",
      });
    }
  };

  const nextSlide = () => {
    const next = (currentSlide + 1) % totalSlides;
    setCurrentSlide(next);
    scrollToSlide(next);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    const prev = (currentSlide - 1 + totalSlides) % totalSlides;
    setCurrentSlide(prev);
    scrollToSlide(prev);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    scrollToSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const scrollLeft = sliderRef.current.scrollLeft;
        const slideWidth = window.innerWidth;
        const newIndex = Math.round(scrollLeft / slideWidth);

        if (newIndex !== currentSlide) {
          setCurrentSlide(newIndex);
        }
      }
    };

    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (slider) {
        slider.removeEventListener("scroll", handleScroll);
      }
    };
  }, [currentSlide]);

  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current && currentSlide) {
        const slideWidth = window.innerWidth;
        sliderRef.current.scrollTo({
          left: currentSlide * slideWidth,
          behavior: "auto",
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <div className="relative">
        <section
          ref={heroRef}
          className="relative w-full h-screen text-white overflow-hidden"
          style={{ zIndex: 1 }}
        >
          {/* Banner Images */}
          <div
            ref={sliderRef}
            className="absolute top-0 left-0 w-full h-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {bannerData.map((banner, index) => (
              <div
                key={index}
                className="min-w-full h-full snap-start flex-shrink-0 relative"
              >
                <Image
                  src={banner.src}
                  alt={banner.alt}
                  fill
                  className="object-cover w-full h-full"
                  priority={index === 0}
                  sizes="100vw"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
              </div>
            ))}
          </div>

          {/* slide content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center max-w-4xl px-6 animate-fadeInUp">
              <h1 className={bannerData[currentSlide].titleStyle}>
                {bannerData[currentSlide].title}
              </h1>
              <p className={bannerData[currentSlide].descStyle}>
                {bannerData[currentSlide].description}
              </p>
              <Link
                href="/services"
                className="mt-5 inline-flex items-center justify-center bg-[#f73e5d] text-white px-10 py-4 rounded-full font-medium text-lg hover:bg-opacity-90 transition-all hover:scale-105 hover:shadow-xl hover:shadow-[#f73e5d]/30 transform duration-300 group"
              >
                Get Started
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/40 backdrop-blur-sm hover:bg-black/60 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/40 backdrop-blur-sm hover:bg-black/60 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Scroll */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
            {bannerData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-500 ${
                  currentSlide === index
                    ? "w-10 h-3 bg-white"
                    : "w-3 h-3 bg-white/40 hover:bg-white/70"
                } rounded-full`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>
      </div>

      <div className="bg-white relative" style={{ zIndex: 3 }}>
        <div className="animate-on-scroll">
          <AuthenticateSkillsSection />
        </div>
        <div className="animate-on-scroll">
          <WhyChooseSection />
        </div>
        <div className="animate-on-scroll">
          <TestimonialsSection />
        </div>
        <div className="animate-on-scroll">
          <LoginSection />
        </div>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                  }
                });
              }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
              });

              document.querySelectorAll('.animate-on-scroll').forEach(el => {
                observer.observe(el);
              });
            });
          `,
        }}
      />
    </div>
  );
}
