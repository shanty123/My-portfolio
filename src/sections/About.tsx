import { FaLinkedin, FaEye } from 'react-icons/fa';

export function About() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-8 py-12"
      style={{
        background: 'linear-gradient(135deg, #FFEB3B, #B0BEC5)', // Yellow and Ash gradient
        animation: 'gradientAnimation 10s ease infinite', // Adding animation to the gradient
      }}
    >
      <h1 className="mb-8 text-4xl font-bold text-center text-white">About Me</h1>

      <div className="max-w-3xl p-6 mx-auto space-y-6 shadow-lg background-card rounded-xl">
        <p className="text-lg leading-relaxed ">
          I'm Shanty, a Web Developer with 3 years of experience building web applications, static sites, and scalable UI solutions. I specialize in creating high-performance, user-friendly interfaces using modern technologies such as Svelte.js, React.js, and CSS. My passion lies in transforming complex ideas into seamless, intuitive digital experiences.
          <br /><br />
          Throughout my career, I’ve contributed to a wide range of projects—from dynamic web applications to fast, lightweight static websites. I take pride in optimizing performance, ensuring accessibility, and delivering smooth, responsive interactions.
          <br /><br />
          I have hands-on experience in full-stack development and backend technologies like Node.js, and I continue to grow and deepen my skills every day.
          <br /><br />
          Beyond coding, I enjoy experimenting with new tools and staying up to date with the latest tech trends. Whether it's a fresh JavaScript framework or an emerging design approach, I'm always eager to learn and grow alongside the ever-evolving web.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/shanty-shabu-2968951a7/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-white transition bg-blue-700 rounded hover:bg-blue-600"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-white transition bg-green-600 rounded hover:bg-green-500"
          >
            <FaEye /> View Resume
          </a>
        </div>
      </div>
    </div>
  );
}
