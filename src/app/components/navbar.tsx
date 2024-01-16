import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavItem from "./navItem";
import { faHome, faHomeAlt, faHomeLg } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const pages = [
    { text: <FontAwesomeIcon icon={faHomeLg} />, href: "/" },
    { text: "À propos", href: "/about" },
    { text: "Services", href: "/services" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <nav>
      <ul>
        {pages.map((page) => (
          <li key={pages.indexOf(page)}>
            <NavItem href={page.href} active="" text={page.text} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
