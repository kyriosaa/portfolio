import Projects from "../../components/project-contents";

import Img1 from "../../assets/projects/software/wipeout/wipeout-1.jpg";
import Img2 from "../../assets/projects/software/wipeout/wipeout-2.jpg";
import Img3 from "../../assets/projects/software/wipeout/wipeout-3.jpg";
import Img4 from "../../assets/projects/software/wipeout/wipeout-4.jpg";

const Wipeout = () => {
  const images = [
    { src: Img1, alt: "Image 1" },
    { src: Img2, alt: "Image 2" },
    { src: Img3, alt: "Image 3" },
    { src: Img4, alt: "Image 4" },
  ];

  const title = "Wipeout";
  const text =
    "A simple web browser obstacle game made using TypeScript and Three.js";
  const date = "Oct 2024";
  const link = "https://kyriosaa.github.io/wipeout/";
  const source = "https://github.com/kyriosaa/wipeout";

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

export default Wipeout;
