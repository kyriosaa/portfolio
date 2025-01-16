import "./css/menu.css";

const Menu = () => {
  return (
    <div className="menu">
      <div className="credits">
        <p>
          WEBPAGE
          <br />
          Built by{" "}
          <a
            href="https://www.linkedin.com/in/kyriosaa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Purit Hongjirakul
          </a>
          <br />
          Using{" "}
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>{" "}
          &{" "}
          <a
            href="https://threejs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Three
          </a>
        </p>
        <p>
          FONT
          <br />
          <a
            href="https://www.dafont.com/w95fa.font"
            target="_blank"
            rel="noopener noreferrer"
          >
            W95FA
          </a>{" "}
          by FontsArena
        </p>
      </div>
    </div>
  );
};

export default Menu;
