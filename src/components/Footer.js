import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname != "/about" && (
        <footer>
          <p>Copyright &copy; 2023</p>
          <Link to="/about">About</Link>
        </footer>
      )}
    </>
  );
};

export default Footer;
