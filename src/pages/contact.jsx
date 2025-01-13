import "./css/contact.css";

const Contact = () => {
  return (
    <div>
      <p className="description">
        Location: Taipei City, Taiwan <br /> Email:{" "}
        <a
          href="mailto:kyriosaaph@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          kyriosaaph@gmail.com
        </a>
      </p>
      <p className="description">
        <a
          href="https://www.linkedin.com/in/kyriosaa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
        <br />
        <a
          href="https://github.com/kyriosaa"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </div>
  );
};

export default Contact;
