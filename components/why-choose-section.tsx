import Link from "next/link";

export default function WhyChooseSection() {
  return (
    <section className="py-16 text-white relative overflow-hidden">
      <div className="absolute inset-0 flex">
        <div className="w-[100%] relative">
          <div className="absolute top-0 left-0 right-0 h-[40%]">
            <img
              src="/images/homepage/why_choose_banner_2.png"
              alt=""
              className="w-full h-full object-cover"
              aria-hidden="true"
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-[40%]">
            <img
              src="/images/homepage/why_choose_banner_2.png"
              alt=""
              className="w-full h-full object-cover"
              aria-hidden="true"
            />

            <div className="absolute inset-0 flex justify-center items-center opacity-60">
              <img
                src="/images/homepage/home_globe.gif"
                alt=""
                className="w-full max-w-2xl"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-2">
          Why Choose{" "}
          <span className="text-white">
            Skill<span className="text-[#f73e5d]">Kwiz</span>
          </span>{" "}
          ?
        </h2>
        <p className="text-center max-w-3xl mx-auto mb-12 text-sm">
          Discover our unique value propositions designed to enhance your
          recruitment strategy.
          <br />
          Experience the difference SkillKwiz can make in your organization.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16 relative h-[450px] md:h-[400px]">
          <div
            className="bg-white rounded-lg p-6 text-black max-w-xs w-full md:w-64 md:h-[350px] transform md:absolute md:left-[calc(50%-280px)] md:top-4 shadow-lg z-10 card-hover"
            style={{ transform: "rotate(-25deg)" }}
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#c3dfff] rounded-full flex items-center justify-center overflow-hidden icon-wrapper">
                <img
                  src="/images/homepage/books.gif"
                  alt=""
                  className="w-20 h-20 object-cover"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h3 className="text-[#00418d] text-xl font-bold text-center mb-3 card-title">
              Skill Library
            </h3>
            <p className="text-gray-700 text-center text-sm card-description">
              Access our extensive library of skill assessments covering
              technical, professional, and soft skills for comprehensive
              candidate evaluation.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 text-black max-w-xs w-full md:w-64 md:h-[350px] transform md:z-20 shadow-lg md:absolute md:left-[calc(50%-130px)] card-hover">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#c3dfff] rounded-full flex items-center justify-center overflow-hidden icon-wrapper">
                <img
                  src="/images/homepage/guard.gif"
                  alt=""
                  className="w-20 h-20 object-cover"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h3 className="text-[#00418d] text-xl font-bold text-center mb-3 card-title">
              Secure Testing
            </h3>
            <p className="text-gray-700 text-center text-sm card-description">
              Our testing is done in secure content-aware environments.
              Candidates are authenticated through multiple identification
              layers including biometric verification such as facial
              recognition, security numbers, which are then periodically
              validated throughout the test.
            </p>
          </div>

          <div
            className="bg-white rounded-lg p-6 text-black max-w-xs w-full md:w-64 md:h-[350px] transform md:absolute md:right-[calc(50%-280px)] md:top-4 shadow-lg z-10 card-hover"
            style={{ transform: "rotate(25deg)" }}
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#c3dfff] rounded-full flex items-center justify-center overflow-hidden icon-wrapper">
                <img
                  src="/images/homepage/dollar.gif"
                  alt=""
                  className="w-20 h-20 object-cover"
                  aria-hidden="true"
                />
              </div>
            </div>
            <h3 className="text-[#00418d] text-xl font-bold text-center mb-3 card-title">
              Flexible Pricing
            </h3>
            <p className="text-gray-700 text-center text-sm card-description">
              Our pricing model is designed to scale with your needs. Pay only
              for what you use with our credit-based system. Larger
              organizations can benefit from our Enterprise plan with unlimited
              testing and custom features.
            </p>
          </div>
        </div>

        <div className="text-center mt-32 md:mt-24 relative z-20">
          <h3 className="text-2xl font-bold mb-4">
            Join the Talent Revolution
          </h3>
          <p className="max-w-2xl mx-auto mb-8 text-sm">
            Take the first step towards transforming your hiring process. Make
            selections in line with our tried and tested platform.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center justify-center bg-[#f7d03e] text-black px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
          >
            Get Started
          </Link>
        </div>
      </div>

      <style jsx>{`
        /* Card Hover Effects - NO Position Changes, NO Borders */
        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        /* Shadow enhancement on hover */
        .card-hover:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 65, 141, 0.3) !important;
          transform: rotate(var(--card-rotation, 0deg)) !important;
        }

        /* Icon hover effect - scale and rotate */
        .icon-wrapper {
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .card-hover:hover .icon-wrapper {
          transform: scale(1.15) rotate(10deg);
          background: linear-gradient(135deg, #e8f0fe, #d4e4fc);
          box-shadow: 0 0 30px rgba(0, 65, 141, 0.15);
        }

        /* Title hover effect */
        .card-title {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .card-hover:hover .card-title {
          color: #f73e5d;
          transform: scale(1.05);
        }

        /* Description hover effect */
        .card-description {
          transition: all 0.4s ease;
        }

        .card-hover:hover .card-description {
          color: #1a1a2e;
        }

        /* Image hover effect */
        img {
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .card-hover:hover img {
          transform: scale(1.1) rotate(5deg);
        }

        /* Keep original rotations - NO CHANGES */
        .card-hover:nth-child(1) {
          --card-rotation: -25deg;
        }

        .card-hover:nth-child(2) {
          --card-rotation: 0deg;
        }

        .card-hover:nth-child(3) {
          --card-rotation: 25deg;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .card-hover:nth-child(1),
          .card-hover:nth-child(2),
          .card-hover:nth-child(3) {
            --card-rotation: 0deg;
          }

          .card-hover:hover {
            transform: rotate(0deg) !important;
          }
        }
      `}</style>
    </section>
  );
}
