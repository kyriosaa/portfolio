import Projects from "../../components/project-contents";

import Img1 from "../../assets/projects/electronics/game-console/game-console1.jpg";
import Img2 from "../../assets/projects/electronics/game-console/game-console2.jpg";
import Img3 from "../../assets/projects/electronics/game-console/game-console3.jpg";
import Img4 from "../../assets/projects/electronics/game-console/game-console4.jpg";

const GameConsole = () => {
  const images = [
    { src: Img1, alt: "Image 1" },
    { src: Img2, alt: "Image 2" },
    { src: Img3, alt: "Image 3" },
    { src: Img4, alt: "Image 4" },
  ];

  const title = "Retro Game Console";
  const text =
    "A retro gaming console I built in my free time. It is powered by a Raspberry Pi 4 Model B running Retropie OS. The entire system runs on a rechargable power bank to allow for portability. This gaming console can play games ranging from the Atari 2600 all the way to the original Playstation.";
  const date = "Jan 2025";
  const link = "https://youtu.be/S4q6FUawJAY";
  const source = "";

  return (
    <Projects
      images={images}
      title={title}
      text={text}
      date={date}
      link={link}
      source={source}
    />
  );
};

export default GameConsole;
