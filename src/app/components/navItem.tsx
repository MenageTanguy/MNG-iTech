import Link from "next/link";

export default function NavItem({ href, active, text }) {
  return (
    <Link href={href} className={`nav_item ${active ? "active" : ""}`}>
      {text}
    </Link>
  );
}
