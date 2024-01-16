import NavItem from "./navItem";

export default function NavBar() {
  const pages = [
    { text: "Home", href: "/" },
    { text: "À propos", href: "/a-propos" },
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
