import { Link } from "react-router-dom";
import logo from "../assets/images/logos/logo.png";

const Logo = () => {
  return (
    <Link to="/" className="text-decoration-none">
      <img src={logo} alt="logo" width={50} height={50} />
      <span className="title">Bendanga</span>
    </Link>
  );
};

export default Logo;
