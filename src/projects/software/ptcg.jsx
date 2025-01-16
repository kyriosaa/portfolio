import Projects from "../../components/project-contents";

import Img1 from "../../assets/projects/software/ptcg/ptcg-1.jpg";
import Img2 from "../../assets/projects/software/ptcg/ptcg-2.jpg";
import Img3 from "../../assets/projects/software/ptcg/ptcg-3.jpg";
import Img4 from "../../assets/projects/software/ptcg/ptcg-4.jpg";

const Ptcg = () => {
  const images = [
    { src: Img1, alt: "Image 1" },
    { src: Img2, alt: "Image 2" },
    { src: Img3, alt: "Image 3" },
    { src: Img4, alt: "Image 4" },
  ];

  const title = "PTCG Bot";
  const text1 =
    "A simple Discord bot that scrapes the web for news relating to the Pokemon TCG and posts them to a channel. It comes with features such as automatic updates, custom slash commands, custom embeds, and activity logging. The bot is hosted 24/7 on my personal Raspberry Pi board.";
  const text2 = "--- Invite link below ---";
  const date = "Jan 2025";
  const link =
    " https://discord.com/oauth2/authorize?client_id=1318567932661338183&permissions=2147502112&integration_type=0&scope=bot";
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

export default Ptcg;
