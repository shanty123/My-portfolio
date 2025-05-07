export default function Projects() {
  return (
    <div
      className="min-h-screen px-4 py-12 sm:px-8"
      style={{
        background: 'linear-gradient(135deg, #FFEB3B, #B0BEC5)',
        animation: 'gradientAnimation 10s ease infinite',
      }}
    >
      <h1 className="mb-8 text-3xl font-bold text-center sm:text-4xl">Projects and Publications</h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {/* Project: News Recommendation System */}
        <div className="p-4 shadow-md background-card sm:p-6 bg-opacity-80 rounded-xl">
          <h2 className="mb-2 text-xl font-semibold sm:text-2xl">News Recommendation System</h2>
          <p className="text-sm sm:text-base">
            Built with Python (Flask) and React.js. This system helps users filter similar news articles in a personalized way.
          </p>
        </div>

        {/* Project: Fake News Detection */}
        <div className="p-4 shadow-md background-card sm:p-6 bg-opacity-80 rounded-xl">
          <h2 className="mb-2 text-xl font-semibold sm:text-2xl">Fake News Detection</h2>
          <p className="text-sm sm:text-base">
            Machine Learning with Flask using Naïve Bayes and TF-IDF for classifying real vs. fake news. Deployed via Flask.
          </p>
        </div>

        {/* Project: Product Rotation */}
        <div className="p-4 shadow-md background-card sm:p-6 bg-opacity-80 rounded-xl">
          <h2 className="mb-2 text-xl font-semibold sm:text-2xl">Product Rotation</h2>
          <p className="text-sm sm:text-base">
            Built using SvelteKit: Enables 360° video rotation of products for interactive user experiences.
          </p>
        </div>

        {/* Publications */}
        <div className="p-4 shadow-md background-card sm:p-6 bg-opacity-80 rounded-xl">
          <h2 className="mb-2 text-xl font-semibold sm:text-2xl">Publications</h2>
          <ul className="mt-3 space-y-2 text-sm list-disc list-inside sm:text-base">
            <li>
              <a
                href="https://medium.com/swlh/news-recommendation-system-a8efde3cb233"
                className="text-yellow-700 underline break-words hover:text-orange-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                News Recommendation System
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/swlh/recommendation-system-for-daily-life-63db634673a1"
                className="text-yellow-700 underline break-words hover:text-orange-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Recommendation System For Daily Life
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
