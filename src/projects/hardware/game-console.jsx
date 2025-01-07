import HardwareProjectInfo from "../../components/HardwareProjectInfo";

const data = {
  imgsrc: "hardwareproj/game-console.JPG",
  title: "DIY Retro Gaming Console",
  description:
    "A retro gaming console I built in my free time. It uses a Raspberry Pi 4 Model B running Retropie OS as its processor. The entire system runs on a rechargable power bank to allow for portability. This gaming console can play games raging from the Atari 2600 all the way to the original Playstation.",
  date: "Jan 2025",
  sourcecode:
    "https://drive.google.com/drive/folders/1SiVt1N7WOdYPcOmC34_wu-Pv5cKbs65j?usp=sharing",
};

const GameConsole = () => {
  return <HardwareProjectInfo data={data} />;
};

export default GameConsole;
