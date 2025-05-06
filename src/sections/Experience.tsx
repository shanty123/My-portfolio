export default function Experience() {
    return (
      <div className="min-h-screen px-8 py-12"  style={{
        height: '100vh',
        background: 'linear-gradient(135deg, #FFEB3B, #B0BEC5)', // Yellow and Ash gradient
        animation: 'gradientAnimation 10s ease infinite', // Adding animation to the gradient
      }}>
        <h1 className="mb-8 text-4xl font-bold text-center">Work Experience</h1>
  
        <div className="max-w-3xl mx-auto space-y-6">
          
          <div className="p-6 shadow background-card rounded-xl">
            <h2 className="mb-2 text-2xl font-semibold">Web Developer</h2>
            <p >Axonista pvt Ltd(Working from home) • March 2024 – present</p>
            <ul className="mt-3 list-disc list-inside">
              <li>
Deployed apps across platforms including Samsung (Tizen), Vizio, and Comcast, ensuring smooth navigation,
video performance, and consistent UI across screen sizes.
</li>
<li>
Led the MVP web development for a white-label sports streaming platform in partnership with Independence
Sports Management (ISM), initially designed for MLB’s Texas Rangers.
</li><li>
Developed and integrated a secure Stripe-based subscription and payment system, enabling card
management, plan handling, and email automation.
</li>
<li>
Designed and built user-centric components for signing up, viewing live games, accessing replays, browsing
player stats, and shopping for merchandise optimized for both TVs and mobile devices</li>
             
            </ul>
          </div>

          <div className="p-6 shadow background-card rounded-xl">
            <h2 className="mb-2 text-2xl font-semibold">Software Developer</h2>
            <p >RecodeAI Solutions Muvattupuzha,Kerala,India • 2 years</p>
            <ul className="mt-3 list-disc list-inside">
              <li>Designed UI components, coded interfaces, improved UX, boosting user satisfaction.
                </li><li>
Developed backend APIs, implemented prototypes, ensuring seamless app functionality.
</li>
<li>
Utilized Node.js, Express, MongoDB, delivering reliable software solutions.
</li><li>
Debugged code, architected front-end, enhancing app reliability and efficiency.
</li>
Adapted to fast-paced environments, consistently meeting deadlines.
<li>
Proficient with modern JavaScript frameworks, including React.js and its workflows such as Redux and Flux,
with a strong emphasis on maintainable and scalable code structures</li>
             
            </ul>
          </div>
         
        </div>
      </div>
    )
  }
  