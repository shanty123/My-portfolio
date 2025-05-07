
export default function Experience() {
    return (
      <div
        className="min-h-screen px-4 py-12 sm:px-8"
        style={{
          background: 'linear-gradient(135deg, #FFEB3B, #B0BEC5)',
          animation: 'gradientAnimation 10s ease infinite',
        }}
      >
        <h1 className="mb-8 text-3xl font-bold text-center sm:text-4xl">Work Experience</h1>
  
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Axonista Experience */}
          <div className="p-4 shadow-md background-card sm:p-6 bg-opacity-80 rounded-xl">
            <h2 className="mb-2 text-xl font-semibold sm:text-2xl">Web Developer</h2>
            <p className="text-sm sm:text-base">
              Axonista Pvt Ltd (Remote) • March 2024 – Present
            </p>
            <ul className="mt-3 space-y-1 text-sm list-disc list-inside sm:text-base">
              <li>
                Deployed apps across platforms including Samsung (Tizen), Vizio, and Comcast, ensuring smooth navigation and consistent UI.
              </li>
              <li>
                Led MVP development for a white-label sports streaming platform with ISM, designed for MLB’s Texas Rangers.
              </li>
              <li>
                Integrated Stripe-based subscription/payment system with automation and plan handling.
              </li>
              <li>
                Built user-centric components for signup, live game views, replays, stats, and mobile/TV shopping experiences.
              </li>
            </ul>
          </div>
  
          {/* RecodeAI Experience */}
          <div className="p-4 shadow-md background-card sm:p-6 bg-opacity-80 rounded-xl">
            <h2 className="mb-2 text-xl font-semibold sm:text-2xl">Software Developer</h2>
            <p className="text-sm sm:text-base">
              RecodeAI Solutions, Kerala, India • 2 Years
            </p>
            <ul className="mt-3 space-y-1 text-sm list-disc list-inside sm:text-base">
              <li>Designed UI components and improved UX, boosting user satisfaction.</li>
              <li>Developed backend APIs and implemented functional prototypes.</li>
              <li>Used Node.js, Express, and MongoDB to deliver scalable backend services.</li>
              <li>Enhanced reliability and efficiency through front-end architecture and debugging.</li>
              <li>
                Proficient in React.js with Redux/Flux, focusing on maintainable and scalable codebases.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  