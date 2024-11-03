import SoftwareProjectInfo from "../../components/SoftwareProjectInfo";

const data = {
  imgsrc: "softwareproj/itdlbiography_main.jpg",
  title: "Ai-Enhanced Website Biography",
  date: "Feb 2024 - Jun 2024",
  description:
    "A website built with JavaScript and React.js that gives the biography of Lyn Shun-Lien Sung by incorporating different elements such as an AI chatbot, AI image generation, and a notes editor.",
  website: "https://itdl-biography.vercel.app",
  sourcecode: "https://github.com/kyriosaa/itdl-biography",
};

const ItdlBiography = () => {
  return <SoftwareProjectInfo data={data} />;
};

export default ItdlBiography;
