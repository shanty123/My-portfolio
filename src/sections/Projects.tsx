export default function Projects() {
  return (
    <div className="min-h-screen px-8 py-12"  style={{
      height: '100vh',
      background: 'linear-gradient(135deg, #FFEB3B, #B0BEC5)', // Yellow and Ash gradient
      animation: 'gradientAnimation 10s ease infinite', // Adding animation to the gradient
    }}>
      <h1 className="mb-8 text-4xl font-bold text-center">Projects and Publications</h1>

      <div className="max-w-3xl mx-auto space-y-6">
        
        <div className="p-6 shadow background-card rounded-xl">
          <h2 className="mb-2 text-2xl font-semibold">News Recommendation System</h2>
          <p >Python (Flask) and React.js : The main aim of my system is to help users to filter similar news articles in a
personalized way.</p>
        </div>

        <div className="p-6 shadow background-card rounded-xl">
          <h2 className="mb-2 text-2xl font-semibold">Fake News Detection</h2>
          <p>Machine learning using python (Flask) : to detect fake and real news I choose naïve bayes algorithm and TFIDF
method in this model. Flask is used to deploy the model.</p>
          
        </div>
        <div className="p-6 shadow background-card rounded-xl">
          <h2 className="mb-2 text-2xl font-semibold">Product Rotation</h2>
          <p>SvelteKit: Implement a 360-degree rotation of the product video, starting at 0 degrees and ending at 360
degrees, allowing users to explore the product interactively.</p>
        </div>
        <div className="p-6 shadow background-card rounded-xl">
          <h2 className="mb-2 text-2xl font-semibold">Publications</h2>
          <ul className="mt-3 list-disc list-inside">
          <li>
     
      <a
        href="https://medium.com/swlh/news-recommendation-system-a8efde3cb233"
        className="text-yellow-600 break-all hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        News Recommendation System
      </a>
    </li>
    <li>
     
     <a
       href="https://medium.com/swlh/recommendation-system-for-daily-life-63db634673a1"
       className="text-yellow-600 break-all hover:underline hover-text-orange-600"
       target="_blank"
       rel="noopener noreferrer"
     >
     Recommendations System For Daily Life
     </a>
   </li>
             </ul>
        </div>
      </div>
    </div>
  )
}
