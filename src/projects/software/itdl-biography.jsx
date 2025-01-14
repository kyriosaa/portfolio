import Projects from "../../components/project-contents";

import Img1 from "../../assets/projects/7-binary/7binary-1.jpg";
import Img2 from "../../assets/projects/7-binary/7binary-2.jpg";
import Img3 from "../../assets/projects/7-binary/7binary-3.jpg";
import Img4 from "../../assets/projects/7-binary/7binary-4.jpg";
import Img5 from "../../assets/projects/7-binary/7binary-5.jpg";

const ItdlBiography = () => {
  const images = [
    { src: Img1, alt: "Image 1" },
    { src: Img2, alt: "Image 2" },
    { src: Img3, alt: "Image 3" },
    { src: Img4, alt: "Image 4" },
    { src: Img5, alt: "Image 5" },
  ];

  const title = "AI-Enhanced Website Biography";
  const text =
    "A website built with JavaScript and React.js that gives the biography of Lyn Shun-Lien Sung by incorporating different elements such as an AI chatbot, AI image generation, and a notes editor.";
  const date = "Jun 2024";
  const link = "https://itdl-biography.vercel.app";
  const source = "https://github.com/kyriosaa/itdl-biography";

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

export default ItdlBiography;
