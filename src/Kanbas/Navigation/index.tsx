import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
  FaTachometerAlt,
  FaBook,
  FaRegCalendarAlt,
  FaDesktop,
  FaShareSquare,
  FaRegQuestionCircle,
  FaUserCircle,
  FaRegEnvelopeOpen,
  FaRegClock,
} from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    // { label: "", <img src="" alt="" /> },
    {
      label: "Account",
      icon: <FaUserCircle className="fs-3" color="LightGray" />,
    },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-3" /> },
    { label: "Courses", icon: <FaBook className="fs-3" /> },
    { label: "Calendar", icon: <FaRegCalendarAlt className="fs-3" /> },
    { label: "Inbox", icon: <FaRegEnvelopeOpen className="fs-3" /> },
    { label: "History", icon: <FaRegClock className="fs-3" /> },
    { label: "Studio", icon: <FaDesktop className="fs-3" /> },
    { label: "Commons", icon: <FaShareSquare className="fs-3" /> },
    { label: "Help", icon: <FaRegQuestionCircle className="fs-3" /> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      <li>
        <a href="http://northeastern.edu">
          <img src="/images/northeastern_logo.png" alt="" />
        </a>
      </li>
      {links.map((link, index) => (
        <li
          key={index}
          className={pathname.includes(link.label) ? "wd-active" : ""}
        >
          <Link to={`/Kanbas/${link.label}`}>
            {" "}
            {link.icon} <br /> {link.label}{" "}
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;
