const Navigation = () => {
  const nav = [
    ["Dashboard", "/dashboard"],
    ["My Team", "/team"],
    ["My Projects", "/projects"],
    ["My Reports", "/reports"],
    ["History Data", "/reports"],
    ["Invoice", "/reports"],
    ["Help", "/reports"],
  ];
  return (
    <nav className="ml-10">
      <ul>
        {nav.map(([title, url]) => (
          <li>
            <a
              href={url}
              className="text-[1rem] text-[white] py-[15px] block hover:bg-[#eff0f2] hover:text-theme-color pl-5 rounded-l-[30px]"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
