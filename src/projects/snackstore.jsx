import ProjectInfo from "../components/ProjectInfo";

const data = {
  imgsrc: "wipeout.jpg",
  title: "SnackStore",
  description: "An e-commerce store",
  date: "Feb 2024 - Jun 2024",
  website: "https://kyriosaa.github.io/wipeout/",
  sourcecode: "https://github.com/kyriosaa/wipeout",
};

const Snackstore = () => {
  return <ProjectInfo data={data} />;
};

export default Snackstore;
