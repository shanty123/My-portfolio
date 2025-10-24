import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <div className="absolute z-10 w-full px-4 text-center text-white top-1/4 sm:top-1/3">
      <h1 className="mb-4 text-4xl font-bold sm:text-6xl">Hey,</h1>

      <TypeAnimation
        sequence={[
          "I'm Shanty 👋",
          2000,
          '',
          "Web Developer 👩‍💻",
          2000,
          '',
        ]}
        wrapper="h1"
        cursor={true}
        repeat={Infinity}
        className="text-2xl font-bold sm:text-5xl"
      />

      <p className="max-w-sm px-2 mx-auto mt-6 text-sm leading-relaxed text-center sm:max-w-md sm:text-md sm:px-0">
        🚀I’m a Web Developer with 3+ years of experience creating high-performance, 
          scalable web apps using React, TypeScript, and JavaScript. 
          I focus on crafting clean, efficient, and intuitive user experiences 
          and I’m passionate about continuous learning, collaboration,
          and writing maintainable code that makes an impact. Outside of work,
          I'm always exploring new tools and techniques to stay
          ahead in the fast-paced world of Software development. 🌟
      </p>
    </div>
  );
}
