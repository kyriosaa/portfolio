import SoftwareProjectInfo from "../../components/SoftwareProjectInfo";

const data = {
  imgsrc: "softwareproj/snackstore.jpg",
  title: "SnackStore",
  description:
    "A modern e-commerce store made using TypeScript, C#, .NET, React.js, and Redux. This website sells Taiwanese snacks and comes equipped with features such as a database, membership login, website cookies, store item management, payment using Stripe, etc.",
  date: "Feb 2024 - Jun 2024",
  website: " ",
  sourcecode: "https://github.com/kyriosaa/snack-store",
};

const Snackstore = () => {
  return <SoftwareProjectInfo data={data} />;
};

export default Snackstore;
