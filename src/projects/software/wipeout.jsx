import Projects from "../../components/project-contents";

import Img1 from "../../assets/projects/software/wipeout/wipeout-1.jpg";

const Wipeout = () => {
  const images = [{ src: Img1, alt: "Image 1" }];

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
