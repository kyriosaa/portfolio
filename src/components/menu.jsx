import "./css/menu.css";
import PropTypes from "prop-types";

const Menu = ({ icons }) => {
  return (
    <div className="menu">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="menu-item"
          onClick={() => icon.onClick && icon.onClick()}
        >
          <img
            src={icon.icon}
            alt={icon.label}
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
          />
          {icon.label}
        </div>
      ))}
    </div>
  );
};

Menu.propTypes = {
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      icon: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default Menu;
