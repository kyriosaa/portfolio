import HardwareProjectInfo from "../../components/HardwareProjectInfo";

const data = {
  imgsrc: "hardwareproj/7binary.jpg",
  title: "7 Segment Display Binary Decoder",
  description:
    "A device that translates binary inputs into decimal outputs. A binary input is fed into the device using the 4 bit DIP switch and goes through the 7447 BCD decoder. The decimal output is then shown on the 7 segment display. This device is powered by a 6V power supply.",
  date: "Nov 2024",
  sourcecode:
    "https://drive.google.com/drive/folders/1uNTP8RaMd9DOsg0Uin5niwS1iuFQMWuN?usp=sharing",
};

const Sevenbinary = () => {
  return <HardwareProjectInfo data={data} />;
};

export default Sevenbinary;
