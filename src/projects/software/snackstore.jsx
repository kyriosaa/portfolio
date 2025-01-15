import Projects from "../../components/project-contents";

import Img1 from "../../assets/projects/software/snackstore/snackstore-1.jpg";

const SnackStore = () => {
  const images = [{ src: Img1, alt: "Image 1" }];

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
