import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Landing page builder{" "}
        <span className="bg-gradient-to-r from-blue-500 to-green-800 text-transparent bg-clip-text">
          for developers
        </span>
      </h1>
      <p className="text-center text-neutral-500 mt-4 max-w-4xl">
        Turn your imagination into immersive reality with our intuitive
        platform. Start building your project effortlessly and bring your ideas
        to life. Whether you’re designing a virtual space or crafting a digital
        experience, our tools empower you to shape your vision. Get started now
        and watch your creativity flourish.
      </p>
      <div className="flex space-x-6 mt-4">
        <a
          href="#"
          className="bg-gradient-to-r from-blue-500 to-green-800 py-2 px-3 rounded-md"
        >
          start for free
        </a>
        <a href="#" className="py-2 px-3 border rounded-md">
          Documentation
        </a>
      </div>

      <div className="mt-10 flex justify-center gap-4 w-auto">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-green-700 shadow-blue-700 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-green-700 shadow-bue-700 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
