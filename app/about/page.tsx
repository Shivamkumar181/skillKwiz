"use client";
import Image from "next/image";
import { Play } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full bg-[#00418d] text-white relative overflow-hidden pt-24">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/homepage/banner_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            ELEVATE YOUR BUSINESS
          </h1>
          <p className="text-center max-w-3xl mx-auto text-sm mb-8">
            Skill Assessments Done With The Utmost Knowledge, Integrity, Trust,
            Respect And Security. Our Objective Is To Provide You With Accurate
            Insights Into The Skill Levels Of Your Current And Prospective
            Workforce.
          </p>
          <div className="flex justify-center">
            <button className="bg-[#f73e5d] text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all">
              Sign Up
            </button>
          </div>
        </div>
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
          {/* <div className="border-[#c3dfff] border-[20px] rounded-full h-[400px] w-[400px] absolute -right-32 top-1/2 -translate-y-1/2"></div> */}
          <div className="relative">
            <Image
              src="/images/homepage/home_globe.gif"
              alt="SkillKwiz assessment platform"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-white py-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6 auto-rows-min">
          <div className="group bg-white overflow-hidden hover:bg-[#00418d] transition-all duration-500 p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-[250px] hover:h-[350px]">
            <Image
              src="/images/aboutpage/eye.gif"
              alt="Eye-if"
              width={200}
              height={200}
              className="w-auto h-auto max-h-32 object-contain mb-4"
            />
            <h3 className="text-[#272727] font-bold group-hover:text-white transition-colors duration-300">
              OUR VISION
            </h3>
            <p className="opacity-0 group-hover:opacity-100 group-hover:mt-4 transition-opacity duration-500 text-sm text-[#272727] group-hover:text-white text-center">
              We envision a future where skill assessments empower companies to
              grow confidently by hiring and developing talent based on data,
              not guesswork.
            </p>
          </div>
          <div className="group bg-white overflow-hidden hover:bg-[#00418d] transition-all duration-500 p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-[250px] hover:h-[350px]">
            {/* <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 border-2 border-[#00418d]">
              <div className="w-12 h-12 border-4 border-[#00418d] rounded-full relative">
                <div className="absolute w-6 h-6 bg-[#c3dfff] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div> */}
            <Image
              src="/images/aboutpage/mission.gif"
              alt="Eye-if"
              width={200}
              height={200}
              className="w-auto h-auto max-h-32 object-contain mb-4"
            />
            <h3 className="text-[#272727] font-bold group-hover:text-white transition-colors duration-300">
              OUR MISSION
            </h3>
            <p className="opacity-0 group-hover:opacity-100 group-hover:mt-4 transition-opacity duration-500 text-sm text-[#272727] group-hover:text-white text-center">
              We envision a future where skill assessments empower companies to
              grow confidently by hiring and developing talent based on data,
              not guesswork.
            </p>
          </div>

          <div className="group bg-white overflow-hidden hover:bg-[#00418d] transition-all duration-500 p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-[250px] hover:h-[350px]">
            {/* <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-4 border-2 border-[#00418d]">
              <div className="w-12 h-12 relative">
                <div className="absolute w-10 h-10 border-4 border-[#00418d] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute w-4 h-4 bg-[#c3dfff] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div> */}
            <Image
              src="/images/aboutpage/purpose.gif"
              alt="Eye-if"
              width={200}
              height={200}
              className="w-auto h-auto max-h-32 object-contain"
            />
            <h3 className="text-[#272727] font-bold group-hover:text-white transition-colors duration-300">
              OUR PURPOSE
            </h3>
            <p className="opacity-0 group-hover:opacity-100 group-hover:mt-4 transition-opacity duration-500 text-sm text-[#272727] group-hover:text-white text-center">
              We envision a future where skill assessments empower companies to
              grow confidently by hiring and developing talent based on data,
              not guesswork.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#00418d] mb-2">
                Who We Are ?
              </h2>
              <p className="text-[#272727]">
                We are your partner in skill assessment. Our expertise lies in
                assessing skill levels in people and quantifying them...
              </p>
              <p className="text-sm text-[#272727] mb-2">
                "SkillKwiz has a single purpose and that is to create
                stakeholder value..."
              </p>
              <p className="text-sm text-[#272727]">
                -Venugopal B A<br />
                CEO, SkillKwiz
              </p>
            </div>

            <div className="w-full md:w-1/2 flex justify-center gap-4">
              <Image
                src="/images/aboutpage/about_who_we_are-0.png"
                alt="Team collaboration"
                height={200}
                width={100}
                className="rounded-lg w-auto h-auto animate-float-delay-2"
              />
              <Image
                src="/images/aboutpage/about_who_we_are-1.png"
                alt="Team collaboration"
                height={200}
                width={100}
                className="rounded-lg w-auto h-auto animate-float-delay-1"
              />
              <Image
                src="/images/aboutpage/about_who_we_are-2.png"
                alt="Team collaboration"
                height={200}
                width={100}
                className="rounded-lg w-auto h-auto animate-float-delay-2"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-full md:w-1/3 flex justify-center md:justify-start">
              <div className="relative">
                <div className="relative p-1 rounded-full bg-gradient-to-br from-[#00418d] via-blue-500 to-[#00a3e0] shadow-2xl shadow-blue-500/20">
                  <div className="bg-white p-2 rounded-full">
                    <Image
                      src="/images/aboutpage/Venugopal.png?height=300&width=300"
                      alt="CEO"
                      width={300}
                      height={300}
                      className="w-full h-auto rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -inset-4 rounded-full border-2 border-[#00418d]/20 animate-pulse"></div>
                <div className="absolute -inset-8 rounded-full border border-blue-400/10"></div>

                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#00418d] to-[#00a3e0] text-white text-center py-2 px-6 rounded-full font-bold text-sm shadow-lg shadow-blue-500/30 whitespace-nowrap">
                  VENUGOPAL B A
                  <span className="block text-[10px] font-light opacity-80">
                    Chief Executive Officer
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="relative">
                <div className="w-12 h-1 bg-gradient-to-r from-[#00418d] to-[#00a3e0] rounded-full mb-4"></div>

                {/* Quote icon */}
                <svg
                  className="w-8 h-8 text-[#00418d]/20 mb-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="text-[#272727] mb-6 leading-relaxed">
                  Venugopal B A, a veteran leader in the IT industry with
                  experience spanning 24 years in senior leadership roles, has
                  chosen to take on the mantle of leading SkillKwiz. His
                  understanding of one of the key challenges faced by the
                  services sector gave birth to the vision that is SkillKwiz
                  today.
                </p>
                <p className="text-[#272727] leading-relaxed">
                  With a rich background in the technology industry, he aims to
                  establish SkillKwiz as an AI first and foremost company. He is
                  poised to take SkillKwiz to its next level of growth by
                  turning it into a company that is shaped entirely by the
                  market it serves.
                </p>

                <div className="flex gap-2 mt-6">
                  <div className="w-2 h-2 rounded-full bg-[#00418d]"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                  <div className="w-2 h-2 rounded-full bg-[#00a3e0]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full bg-white py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative group">
            {/* Video Frame with Shadow Effect */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/50 transition-all duration-500 group-hover:shadow-gray-300/70">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00418d] via-[#00a8e8] to-[#f73e5d] p-[3px] opacity-0 group-hover:opacity-100 transition-all duration-700">
                <div className="w-full h-full bg-white rounded-2xl"></div>
              </div>

              {/* Video Container */}
              <div className="relative rounded-2xl overflow-hidden bg-black/5">
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 z-10 flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-lg shadow-red-500/50 animate-pulse"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500 shadow-lg shadow-yellow-500/50 animate-pulse delay-100"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-lg shadow-green-500/50 animate-pulse delay-200"></div>
                </div>

                <video
                  className="w-full h-auto rounded-2xl transition-all duration-700 group-hover:scale-[1.01]"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/images/aboutpage/about_video.png"
                >
                  <source
                    src="/images/aboutpage/about_video.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>

                {/* Play Button Overlay (Auto-hidden when video plays) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-20 h-20 bg-[#00418d]/90 backdrop-blur-sm rounded-full flex items-center justify-center pointer-events-auto cursor-pointer hover:bg-[#00418d] hover:scale-110 hover:shadow-2xl hover:shadow-[#00418d]/30 transition-all duration-300 transform">
                    <svg
                      className="w-10 h-10 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Progress Bar (Custom) */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-b-2xl overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#00418d] via-[#00a8e8] to-[#f73e5d] rounded-b-2xl transition-all duration-1000 animate-progress"></div>
                </div>
              </div>
            </div>

            {/* Video Title/Description (Optional) */}
            <div className="mt-6 text-center transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
              <h3 className="text-xl font-semibold text-[#00418d]">
                Watch Our Story
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Discover how SkillKwiz is transforming skill assessment
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes progress {
            0% {
              width: 0%;
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              width: 100%;
              opacity: 0;
            }
          }

          .animate-progress {
            animation: progress 5s ease-in-out infinite;
          }

          /* Pulse animation for decorative dots */
          .delay-100 {
            animation-delay: 100ms;
          }
          .delay-200 {
            animation-delay: 200ms;
          }

          /* Video frame hover effect */
          .group:hover .shadow-2xl {
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          }

          /* Custom video controls styling */
          video::-webkit-media-controls-panel {
            background: linear-gradient(
              to top,
              rgba(0, 0, 0, 0.8),
              transparent
            );
          }

          video::-webkit-media-controls-play-button {
            background-color: #00418d;
            border-radius: 50%;
            padding: 8px;
          }

          video::-webkit-media-controls-current-time-display,
          video::-webkit-media-controls-time-remaining-display {
            color: white;
          }

          video::-webkit-media-controls-timeline {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 10px;
          }

          video::-webkit-media-controls-volume-slider {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 10px;
          }

          /* Smooth video loading */
          video {
            background: #f3f4f6;
            min-height: 300px;
          }

          /* Responsive adjustments */
          @media (max-width: 640px) {
            .group:hover .scale-\[1\.01\] {
              transform: scale(1);
            }

            .w-20 {
              width: 16px;
              height: 16px;
            }
          }
        `}</style>
      </section>
    </>
  );
}
