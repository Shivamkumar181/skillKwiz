import Image from "next/image";
import { useEffect, useRef } from "react";

export default function AuthenticateSkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftImagesRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const rightImagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (leftImagesRef.current) {
              const images =
                leftImagesRef.current.querySelectorAll(".image-container");
              images.forEach((img, index) => {
                setTimeout(() => {
                  img.classList.add("animate-in");
                }, index * 200);
              });
            }
            if (centerRef.current) {
              centerRef.current.classList.add("animate-in");
            }

            if (rightImagesRef.current) {
              const images =
                rightImagesRef.current.querySelectorAll(".image-container");
              images.forEach((img, index) => {
                setTimeout(
                  () => {
                    img.classList.add("animate-in");
                  },
                  index * 200 + 300,
                );
              });
            }
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div
            ref={leftImagesRef}
            className="relative w-full md:w-1/3 h-[400px] md:h-[500px]"
          >
            <div className="image-container absolute top-0 left-0 w-[80%] h-[80%] transform -rotate-12 z-10 opacity-0 translate-x-[-50px]">
              <div className="relative w-full h-full group overflow-hidden rounded-lg">
                <Image
                  src="/images/homepage/skills_1.png"
                  alt="Professional working at night"
                  width={350}
                  height={500}
                  className="rounded-lg object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-blue-500/0 via-transparent to-blue-500/0 group-hover:from-blue-500/20 group-hover:to-blue-500/10 transition-all duration-700"></div>
              </div>
            </div>
            <div className="image-container absolute bottom-0 left-[10%] w-[80%] h-[80%] transform -rotate-6 opacity-0 translate-x-[-30px] translate-y-[30px]">
              <div className="relative w-full h-full group overflow-hidden rounded-lg">
                <Image
                  src="/images/homepage/skills_2.png"
                  alt="Professional in tech environment"
                  width={350}
                  height={500}
                  className="rounded-lg object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-bl from-purple-500/0 via-transparent to-purple-500/0 group-hover:from-purple-500/20 group-hover:to-purple-500/10 transition-all duration-700"></div>
              </div>
            </div>
          </div>

          {/* Center content */}
          <div
            ref={centerRef}
            className="w-full md:w-1/3 text-center my-8 md:my-0 z-20 opacity-0 translate-y-[30px]"
          >
            <div className="relative">
              {/* Decorative line above */}
              <div className="w-16 h-1 bg-gradient-to-r from-[#00418d] to-blue-400 mx-auto mb-6 rounded-full transform scale-x-0 transition-transform duration-1000"></div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#00418d] mb-4 leading-tight">
                Authenticate Skills,
                <br />
                <span className="relative inline-block">
                  Simplify Hiring
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-[#00418d] transform scale-x-0 transition-transform duration-1000 delay-300"></span>
                </span>
              </h2>

              <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-[#00418d] mx-auto mb-6 rounded-full"></div>

              <p className="text-gray-700 leading-relaxed max-w-sm mx-auto">
                SkillKwiz ensures professionals are evaluated accurately in
                their chosen fields. Our secure testing centers provide
                authenticated skill assessments, giving you instant access to
                verified reports—eliminating the need for lengthy technical
                interviews.
              </p>

              {/* Decorative dots */}
              <div className="flex justify-center gap-2 mt-6">
                <div className="w-2 h-2 rounded-full bg-[#00418d] opacity-0 transition-all duration-500 delay-700"></div>
                <div className="w-2 h-2 rounded-full bg-blue-400 opacity-0 transition-all duration-500 delay-800"></div>
                <div className="w-2 h-2 rounded-full bg-[#00418d] opacity-0 transition-all duration-500 delay-900"></div>
              </div>
            </div>
          </div>

          {/* Right side stacked images */}
          <div
            ref={rightImagesRef}
            className="relative w-full md:w-1/3 h-[400px] md:h-[500px]"
          >
            <div className="image-container absolute top-0 right-0 w-[80%] h-[80%] transform rotate-9 z-10 opacity-0 translate-x-[50px]">
              <div className="relative w-full h-full group overflow-hidden rounded-lg">
                <Image
                  src="/images/homepage/skills_3.png"
                  alt="Professional at workstation"
                  width={350}
                  height={500}
                  className="rounded-lg object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-bl from-blue-500/0 via-transparent to-blue-500/0 group-hover:from-blue-500/20 group-hover:to-blue-500/10 transition-all duration-700"></div>
              </div>
            </div>
            <div className="image-container absolute bottom-0 right-[10%] w-[80%] h-[80%] transform rotate-6 opacity-0 translate-x-[30px] translate-y-[30px]">
              <div className="relative w-full h-full group overflow-hidden rounded-lg">
                <Image
                  src="/images/homepage/skills_4.png"
                  alt="Business professional looking at digital interface"
                  width={350}
                  height={500}
                  className="rounded-lg object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-purple-500/0 via-transparent to-purple-500/0 group-hover:from-purple-500/20 group-hover:to-purple-500/10 transition-all duration-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .image-container.animate-in {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }

        .image-container.animate-in:nth-child(1) {
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .image-container.animate-in:nth-child(2) {
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-in {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
          transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-in .scale-x-0 {
          transform: scaleX(1) !important;
        }

        .animate-in .w-2 {
          opacity: 1 !important;
        }

        /* Professional hover effects - scale only */
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }

        /* Smooth gradient overlay on hover */
        .group:hover .bg-gradient-to-tr {
          background: linear-gradient(
            to top right,
            rgba(59, 130, 246, 0.2),
            rgba(59, 130, 246, 0.05)
          );
        }

        .group:hover .bg-gradient-to-bl {
          background: linear-gradient(
            to bottom left,
            rgba(168, 85, 247, 0.2),
            rgba(168, 85, 247, 0.05)
          );
        }

        /* Image container hover effect */
        .group {
          cursor: pointer;
        }

        /* Optional: Add a subtle border glow on hover */
        .group:hover .rounded-lg {
          box-shadow: 0 0 30px rgba(0, 65, 141, 0.1);
        }
      `}</style>
    </section>
  );
}
