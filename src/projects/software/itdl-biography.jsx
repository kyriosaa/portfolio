import Projects from "../../components/project-contents";

import Img1 from "../../assets/projects/software/itdlbiography/itdlbiography-1.jpg";
import Img2 from "../../assets/projects/software/itdlbiography/itdlbiography-2.jpg";
import Img3 from "../../assets/projects/software/itdlbiography/itdlbiography-3.jpg";
import Img4 from "../../assets/projects/software/itdlbiography/itdlbiography-4.jpg";

const ItdlBiography = () => {
  const images = [
    { src: Img1, alt: "Image 1" },
    { src: Img2, alt: "Image 2" },
    { src: Img3, alt: "Image 3" },
    { src: Img4, alt: "Image 4" },
  ];

  const title = "AI-Enhanced Website Biography";
  const text1 =
    "A website built with JavaScript and React.js that gives the biography of Lyn Shun-Lien Sung by incorporating different elements such as an AI chatbot, AI image generation, and a notes editor.";
  const text2 = "";
  const date = "Jun 2024";
  const link = "https://itdl-biography.vercel.app";
  const source = "https://github.com/kyriosaa/itdl-biography";

  return (
    <Projects
      images={images}
      title={title}
      text1={text1}
      text2={text2}
      date={date}
      link={link}
      source={source}
    />
  );
};

export default ItdlBiography;
