const Menu = (props) => {
  const { className, classChild } = props;
  return (
    <>
      <ul className={`${className}`}>
        <li className="flex">
          <a href={`/#anime`} className={`${classChild} hover:text-sky-400 `}>
            Top Anime
          </a>
        </li>
        <li className="flex">
          <a href={`/#manga`} className={`${classChild} hover:text-sky-400 `}>
            Top Manga
          </a>
        </li>
        <li className="flex">
          <a href="#" className={`${classChild} hover:text-sky-400 `}>
            Coming Soon
          </a>
        </li>
      </ul>
    </>
  );
};

export default Menu;
