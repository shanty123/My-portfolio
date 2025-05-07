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
    <div
      className="min-h-screen px-4 py-8"
      style={{
        background: 'linear-gradient(135deg, #7da43e, #B0BEC5)',
      }}
    >
      <h1 className="mb-8 text-3xl font-bold text-center sm:text-4xl">Skills</h1>

      <div className="grid max-w-4xl grid-cols-1 gap-4 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-2 py-3 font-semibold text-center transition duration-300 shadow-md background-card text-md rounded-xl hover:shadow-lg"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
