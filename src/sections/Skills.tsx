export default function Skills() {
    const skills = [
      'HTML',
      'CSS',
      'JavaScript',
      'React.js',
      'Svelte.js',
      'Sveltekit',
      'Node.js',
      'Express',
      'MongoDB',
      'DynamoDB',
      'Google Analytics',
      'Conviva',
      'Bitbuckect',
      'Tailwind CSS',
      'Git & GitHub',
      'Figma',
      'AWS',
      'Slack',
      'Notion'
    ];
  
    return (
      <div className="px-8 py-12 bamin-h-screen"  style={{
        height: '100vh',
        background: 'linear-gradient(135deg, #FFEB3B, #B0BEC5)', // Yellow and Ash gradient
        animation: 'gradientAnimation 10s ease infinite', // Adding animation to the gradient
      }}>
        <h1 className="mb-8 text-4xl font-bold text-center">Skills</h1>
  
        <div className="grid max-w-3xl grid-cols-2 gap-4 mx-auto sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="py-3 font-semibold text-center transition duration-300 shadow-md background-card bacx-4 rounded-xl text-md hover:shadow-lg"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    );
  }
  