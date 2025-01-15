import Projects from "../../components/project-contents";

import Img1 from "../../assets/projects/software/snackstore/snackstore-1.jpg";
import Img2 from "../../assets/projects/software/snackstore/snackstore-2.jpg";
import Img3 from "../../assets/projects/software/snackstore/snackstore-3.jpg";
import Img4 from "../../assets/projects/software/snackstore/snackstore-4.jpg";
import Img5 from "../../assets/projects/software/snackstore/snackstore-5.jpg";

const SnackStore = () => {
  const images = [
    { src: Img1, alt: "Image 1" },
    { src: Img2, alt: "Image 2" },
    { src: Img3, alt: "Image 3" },
    { src: Img4, alt: "Image 4" },
    { src: Img5, alt: "Image 5" },
  ];

  const title = "SnackStore";
  const text =
    "A modern e-commerce store made using TypeScript, C#, .NET, React.js, and Redux. This website sells Taiwanese snacks and comes equipped with features such as a database, membership login, website cookies, store item management, payment using Stripe, etc.";
  const date = "Jun 2024";
  const link = "";
  const source = "https://github.com/kyriosaa/snack-store";

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

export default SnackStore;
