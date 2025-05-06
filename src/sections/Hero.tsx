import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <div className="absolute z-10 w-full px-4 text-center text-white top-1/3 justify-items-center">
      <h1 className="mb-4 text-6xl font-bold">Hey,</h1>

      <TypeAnimation
        sequence={[
          "I'm Shanty 👋", 
          2000,            
          '',              
          "Frontend Developer 👩‍💻", 
          2000,
          '', 
        ]}
        wrapper="h1"
        cursor={true}
        repeat={Infinity}
        className="text-5xl font-bold"
      />

      <p className="max-w-md mx-auto mt-6 leading-relaxed text-left text-md">
        🚀 I'm a Frontend Developer with over 3 years of experience, passionate about crafting
        user-centric and performance-driven web solutions. I love turning complex ideas into seamless,
        intuitive experiences. Outside of work, I'm always exploring new tools and techniques to stay
        ahead in the fast-paced world of frontend development. 🌟
      </p>
    </div>
  );
}
