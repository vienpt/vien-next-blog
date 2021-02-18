const links = [
  {
    href: "about",
    label: "About",
  },
];

export default function Nav() {
  return (
    <nav>
      <ul className="flex items-center justify-between pt-3 space-x-1 md:pt-0">
        {links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <a
              href={href}
              className="no-underline border-transparent btn-indigo"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
