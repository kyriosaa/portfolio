import SoftwareProjectInfo from "../../components/SoftwareProjectInfo";

const data = {
  imgsrc: "softwareproj/wipeout.jpg",
  title: "Wipeout",
  date: "Sep 2024 - Oct 2024",
  description:
    "A simple web browser obstacle game made using TypeScript and Three.js",
  website: "https://kyriosaa.github.io/wipeout/",
  sourcecode: "https://github.com/kyriosaa/wipeout",
};

const Wipeout = () => {
  return <SoftwareProjectInfo data={data} />;
};

export default Wipeout;
