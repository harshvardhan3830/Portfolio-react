import { Github, Instagram, Linkedin } from "lucide-react";
import user from "../assets/images/IMG_7068.jpg";
const Home = () => {
  const igUrl = "";
  const handleClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="flex flex-row w-[100vw] h-[100vh] justify-between items-center bg-blue">
      <div className="w-[50%] flex flex-col px-16">
        <img
          src={user}
          alt="user"
          className=" h-40 w-40 rounded-full object-cover"
        />
        <h1 className="text-white text-4xl font-extrabold py-1">
          Harsh Vardhan
        </h1>
        <h2 className="text-white text-xl font-medium py-2">
          Senior Software Developer
        </h2>
        <p className="text-white text-md py-4">
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
        <div className="flex flex-row absolute bottom-12 w-[20%] justify-evenly items-center m-auto">
          <Instagram
            className="hover:cursor-pointer text-white"
            onClick={() =>
              handleClick("https://www.instagram.com/vardhan.3830/")
            }
          />
          <Linkedin
            className="hover:cursor-pointer text-white"
            onClick={() =>
              handleClick("https://www.linkedin.com/in/harshvardhankanwer")
            }
          />
          <Github
            className="hover:cursor-pointer text-white"
            onClick={() => handleClick("https://github.com/harshvardhan3830")}
          />
        </div>
      </div>
      <div className="w-[50%]">Right</div>
    </div>
  );
};

export default Home;
