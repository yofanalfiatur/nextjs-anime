import Search from "./Search";

const Header = () => {
  return (
    <>
      <header className="w-full h-full bg-sky-700 sticky top-0 shadow-lg z-50">
        <div className="container mx-auto flex flex-row justify-between items-center">
          <div className="">
            <p className="text-3xl max-w-max text-transparent bg-clip-text bg-gradient-to-r from-amber-600  to-yellow-200">
              ANIMEK
            </p>
          </div>
          <div className="menu flex flex-row justify-between items-center gap-8">
            <ul className="flex flex-row gap-4">
              <li className="flex">
                <a href="#anime" className="w-full py-6">
                  Top Anime
                </a>
              </li>
              <li className="flex">
                <a href="#manga" className="w-full py-6">
                  Top Manga
                </a>
              </li>
              <li className="flex">
                <a href="#" className="w-full py-6">
                  Coming Soon
                </a>
              </li>
            </ul>
            <Search />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
