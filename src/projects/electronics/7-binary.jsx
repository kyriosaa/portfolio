import Projects from "../../components/project-contents";

import Img1 from "../../assets/projects/electronics/7-binary/7binary-1.jpg";
import Img2 from "../../assets/projects/electronics/7-binary/7binary-2.jpg";
import Img3 from "../../assets/projects/electronics/7-binary/7binary-3.jpg";
import Img4 from "../../assets/projects/electronics/7-binary/7binary-4.jpg";
import Img5 from "../../assets/projects/electronics/7-binary/7binary-5.jpg";

const SevenBinary = () => {
  const images = [
    { src: Img1, alt: "Image 1" },
    { src: Img2, alt: "Image 2" },
    { src: Img3, alt: "Image 3" },
    { src: Img4, alt: "Image 4" },
    { src: Img5, alt: "Image 5" },
  ];

  const title = "7 Segment Display Binary Decoder";
  const text1 =
    "A device that translates binary inputs into decimal outputs. A binary input is fed into the device using the 4 bit DIP switch and goes through the 7447 BCD decoder. The decimal output is then shown on the 7 segment display. This device is powered by a 6V power supply.";
  const text2 = "";
  const date = "Nov 2024";
  const link = "";
  const source = "";

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

export default SevenBinary;
