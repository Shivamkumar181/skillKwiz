import { Play } from "lucide-react";
import { useEffect, useRef } from "react";

export default function LoginSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate left panel
            if (leftPanelRef.current) {
              leftPanelRef.current.classList.add("animate-slide-in-left");
            }

            // Animate right panel
            if (rightPanelRef.current) {
              rightPanelRef.current.classList.add("animate-slide-in-right");
            }

            // Animate icons with stagger
            iconRefs.current.forEach((icon, index) => {
              if (icon) {
                setTimeout(
                  () => {
                    icon.classList.add("animate-float-in");
                  },
                  index * 150 + 300,
                );
              }
            });

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
    <section ref={sectionRef} className="py-16 bg-[#000c2a] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl flex flex-col md:flex-row">
          {/* Left side - Skill Assessment Library */}
          <div
            ref={leftPanelRef}
            className="w-full md:w-1/2 p-8 relative opacity-0 translate-x-[-50px]"
          >
            <div className="flex flex-col h-full">
              <div className="text-center mb-6">
                <div className="inline-block relative">
                  {/* SVG Image */}
                  <svg
                    className="w-20 h-20 mx-auto mb-4 transform transition-transform duration-700 hover:scale-110"
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* representing library */}
                    <rect
                      x="10"
                      y="50"
                      width="25"
                      height="35"
                      rx="2"
                      className="fill-[#f73e5d]"
                      opacity="0.9"
                    />
                    <rect
                      x="10"
                      y="45"
                      width="25"
                      height="5"
                      rx="1"
                      className="fill-[#f73e5d]"
                      opacity="0.6"
                    />
                    <rect
                      x="12"
                      y="48"
                      width="3"
                      height="35"
                      rx="1"
                      className="fill-white"
                      opacity="0.3"
                    />

                    <rect
                      x="20"
                      y="40"
                      width="25"
                      height="35"
                      rx="2"
                      className="fill-[#00a8e8]"
                      opacity="0.9"
                    />
                    <rect
                      x="20"
                      y="35"
                      width="25"
                      height="5"
                      rx="1"
                      className="fill-[#00a8e8]"
                      opacity="0.6"
                    />
                    <rect
                      x="22"
                      y="38"
                      width="3"
                      height="35"
                      rx="1"
                      className="fill-white"
                      opacity="0.3"
                    />

                    <rect
                      x="30"
                      y="30"
                      width="25"
                      height="35"
                      rx="2"
                      className="fill-[#f6c648]"
                      opacity="0.9"
                    />
                    <rect
                      x="30"
                      y="25"
                      width="25"
                      height="5"
                      rx="1"
                      className="fill-[#f6c648]"
                      opacity="0.6"
                    />
                    <rect
                      x="32"
                      y="28"
                      width="3"
                      height="35"
                      rx="1"
                      className="fill-white"
                      opacity="0.3"
                    />

                    {/* Decorative elements */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      className="stroke-[#f73e5d]"
                      strokeWidth="1"
                      opacity="0.1"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      className="stroke-[#00a8e8]"
                      strokeWidth="1"
                      opacity="0.1"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="31"
                      className="stroke-[#f6c648]"
                      strokeWidth="1"
                      opacity="0.1"
                      fill="none"
                    />

                    {/* star icons */}
                    <path
                      d="M65 15 L67 20 L72 22 L67 24 L65 29 L63 24 L58 22 L63 20 Z"
                      className="fill-[#f6c648]"
                      opacity="0.6"
                    />
                    <path
                      d="M75 35 L76 38 L79 39 L76 40 L75 43 L74 40 L71 39 L74 38 Z"
                      className="fill-[#00a8e8]"
                      opacity="0.5"
                    />
                    <path
                      d="M15 35 L16 38 L19 39 L16 40 L15 43 L14 40 L11 39 L14 38 Z"
                      className="fill-[#f73e5d]"
                      opacity="0.4"
                    />
                  </svg>

                  <h2 className="text-4xl font-bold leading-tight">
                    <span className="text-[#f73e5d]">SKILL</span>
                    <br />
                    <span className="text-[#00a8e8]">ASSESSMENT</span>
                    <br />
                    <span className="text-[#f6c648]">LIBRARY</span>
                  </h2>

                  {/* Decorative underline */}
                  <div className="w-24 h-1 bg-gradient-to-r from-[#f73e5d] via-[#00a8e8] to-[#f6c648] mx-auto mt-3 rounded-full"></div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {/* Target icon */}
                <div
                  ref={(el) => {
                    if (el) iconRefs.current[0] = el;
                  }}
                  className="flex justify-center opacity-0 translate-y-[30px]"
                >
                  <div className="w-16 h-16 relative transition-all duration-300 hover:scale-110 hover:rotate-12">
                    <div className="w-16 h-16 rounded-full border-2 border-[#f73e5d] flex items-center justify-center transition-all duration-300 hover:border-[#f73e5d] hover:shadow-lg hover:shadow-[#f73e5d]/20">
                      <div className="w-12 h-12 rounded-full border-2 border-[#f73e5d] flex items-center justify-center transition-all duration-300">
                        <div className="w-8 h-8 rounded-full border-2 border-[#f73e5d] flex items-center justify-center transition-all duration-300">
                          <div className="w-2 h-2 bg-[#00a8e8] rounded-full transition-all duration-300 group-hover:scale-150"></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-3 right-0 w-4 h-1 bg-[#00a8e8] transform rotate-45 transition-all duration-300 group-hover:rotate-90"></div>
                  </div>
                </div>

                {/* Chart icon */}
                <div
                  ref={(el) => {
                    if (el) iconRefs.current[1] = el;
                  }}
                  className="flex justify-center opacity-0 translate-y-[30px]"
                >
                  <div className="w-16 h-16 transition-all duration-300 hover:scale-110 hover:rotate-12">
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 20V10"
                        stroke="#00a8e8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all duration-300"
                      />
                      <path
                        d="M12 20V4"
                        stroke="#00a8e8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all duration-300"
                      />
                      <path
                        d="M6 20V14"
                        stroke="#00a8e8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all duration-300"
                      />
                    </svg>
                  </div>
                </div>

                {/* Play button */}
                <div
                  ref={(el) => {
                    if (el) iconRefs.current[2] = el;
                  }}
                  className="flex justify-center opacity-0 translate-y-[30px]"
                >
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-all duration-300 hover:scale-110 hover:shadow-lg">
                    <Play className="w-8 h-8 text-gray-700 ml-1 transition-all duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-auto">
                {/* Magnifying glass */}
                <div
                  ref={(el) => {
                    if (el) iconRefs.current[3] = el;
                  }}
                  className="flex justify-center opacity-0 translate-y-[30px]"
                >
                  <div className="w-16 h-16 transition-all duration-300 hover:scale-110 hover:rotate-12">
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                        stroke="#00a8e8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all duration-300"
                      />
                      <path
                        d="M21 21L16.65 16.65"
                        stroke="#00a8e8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all duration-300"
                      />
                    </svg>
                  </div>
                </div>

                {/* Users icon */}
                <div
                  ref={(el) => {
                    if (el) iconRefs.current[4] = el;
                  }}
                  className="flex justify-center opacity-0 translate-y-[30px]"
                >
                  <div className="w-16 h-16 transition-all duration-300 hover:scale-110 hover:rotate-12">
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21"
                        stroke="#00a8e8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all duration-300"
                      />
                      <path
                        d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                        stroke="#00a8e8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all duration-300"
                      />
                      <path
                        d="M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13"
                        stroke="#00a8e8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all duration-300"
                      />
                      <path
                        d="M16 3.13C17.7699 3.58317 19.0078 5.17799 19.0078 7.005C19.0078 8.83201 17.7699 10.4268 16 10.88"
                        stroke="#00a8e8"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all duration-300"
                      />
                    </svg>
                  </div>
                </div>

                {/* Chart/report icon */}
                <div
                  ref={(el) => {
                    if (el) iconRefs.current[5] = el;
                  }}
                  className="flex justify-center opacity-0 translate-y-[30px]"
                >
                  <div className="w-16 h-16 transition-all duration-300 hover:scale-110 hover:rotate-12">
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                        stroke="#f6c648"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all duration-300"
                      />
                      <path
                        d="M14 2V8H20"
                        stroke="#f6c648"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all duration-300"
                      />
                      <path
                        d="M16 13H8"
                        stroke="#f6c648"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all duration-300"
                      />
                      <path
                        d="M16 17H8"
                        stroke="#f6c648"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all duration-300"
                      />
                      <path
                        d="M10 9H9H8"
                        stroke="#f6c648"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-all duration-300"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Login Form */}
          <div
            ref={rightPanelRef}
            className="w-full md:w-1/2 bg-[#00418d] p-8 flex items-center opacity-0 translate-x-[50px]"
          >
            <div className="w-full">
              <h2 className="text-xl font-bold text-white mb-6 transform transition-all duration-700 hover:translate-x-2">
                Sign in to Skill Kwiz
              </h2>

              <form className="space-y-4">
                <div className="transform transition-all duration-300 hover:translate-x-1">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-gray-200 text-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a8e8] transition-all duration-300 hover:shadow-lg hover:shadow-[#00a8e8]/10"
                  />
                </div>

                <div className="transform transition-all duration-300 hover:translate-x-1">
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full bg-gray-200 text-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a8e8] transition-all duration-300 hover:shadow-lg hover:shadow-[#00a8e8]/10"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center text-white cursor-pointer group">
                    <input
                      type="checkbox"
                      className="h-4 w-4 mr-2 transition-all duration-300 group-hover:scale-110"
                    />
                    <span className="transition-all duration-300 group-hover:text-[#00a8e8]">
                      Remember me
                    </span>
                  </label>
                  <a
                    href="#"
                    className="text-white hover:underline transition-all duration-300 hover:text-[#00a8e8] hover:scale-105"
                  >
                    Forget Password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#f73e5d] text-white p-3 rounded-md font-medium transition-all duration-300 hover:bg-opacity-90 hover:scale-105 hover:shadow-xl hover:shadow-[#f73e5d]/30 transform"
                >
                  Sign In
                </button>

                <div className="text-center text-white">
                  <p className="mb-2">— Or Login with —</p>
                  <div className="flex justify-center space-x-4">
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-white/20 transform">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          fill="white"
                        />
                        <path
                          d="M17.2 10.8H12.8V7.2H11.2V10.8H6.8V12.4H11.2V16H12.8V12.4H17.2V10.8Z"
                          fill="#DB4437"
                        />
                      </svg>
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-white/20 transform">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.0532 12.5282C17.0699 14.0268 17.6762 15.4512 18.7212 16.4962C18.7678 16.5428 18.7911 16.6077 18.7857 16.6733C18.5987 17.6267 18.2697 18.5467 17.8122 19.3992C17.4222 20.1372 16.5372 21.0792 15.6392 21.0852C14.8042 21.0912 14.5022 20.6142 13.5372 20.6142C12.5722 20.6142 12.2342 21.0672 11.4522 21.0912C10.6042 21.1152 9.63221 20.0702 9.23421 19.3362C8.0022 17.3882 7.0252 13.7852 8.3042 11.3582C8.9342 10.1522 10.1042 9.3882 11.3642 9.3642C12.1762 9.3402 12.9342 9.8702 13.4582 9.8702C13.9822 9.8702 14.9232 9.2342 15.9192 9.3402C16.7372 9.3882 17.4702 9.7782 17.9822 10.4022C17.9941 10.4156 18.0026 10.4319 18.0069 10.4496C18.0112 10.4673 18.0111 10.4857 18.0067 10.5033C17.7647 11.1953 17.0622 12.0073 17.0532 12.5282Z"
                          fill="black"
                        />
                        <path
                          d="M15.0002 8.0002C15.0002 7.0722 14.6372 6.1802 14.0002 5.5372C13.3692 4.9002 12.4862 4.5312 11.5702 4.5002C11.5522 4.5002 11.5342 4.5092 11.5222 4.5212C11.5102 4.5332 11.5042 4.5512 11.5042 4.5692V4.5692C11.5042 5.4872 11.8672 6.3792 12.5042 7.0222C13.1352 7.6592 14.0182 8.0282 14.9342 8.0592C14.9522 8.0592 14.9702 8.0502 14.9822 8.0382C14.9942 8.0262 15.0002 8.0082 15.0002 7.9902V8.0002Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Left panel slide in animation */
        .animate-slide-in-left {
          animation: slideInLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        /* Right panel slide in animation */
        .animate-slide-in-right {
          animation: slideInRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)
            forwards;
        }

        /* Icon float in animation */
        .animate-float-in {
          animation: floatIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes floatIn {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Hover effects for icons */
        .group:hover .group-hover\\:scale-150 {
          transform: scale(1.5);
        }

        .group:hover .group-hover\\:rotate-90 {
          transform: rotate(90deg);
        }

        .group:hover .group-hover\\:translate-x-1 {
          transform: translateX(4px);
        }

        /* Smooth transitions for all interactive elements */
        * {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
}
