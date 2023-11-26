import Search from "./Search";

const Header = () => {
  return (
    <>
      <header className="w-full h-full bg-sky-700">
        <div className="container mx-auto flex flex-row justify-between items-center">
          <div className="">
            <p className="text-3xl max-w-max text-transparent bg-clip-text bg-gradient-to-r from-amber-600  to-yellow-200">
              ANIMEK
            </p>
          </div>
          <div className="menu">
            <ul className="flex flex-row gap-4">
              <li className="flex">
                <a href="#" className="w-full py-6">
                  Top Anime
                </a>
              </li>
              <li className="flex">
                <a href="#" className="w-full py-6">
                  Populer
                </a>
              </li>
              <li className="flex">
                <a href="#" className="w-full py-6">
                  Coming Soon
                </a>
              </li>
            </ul>
          </div>
          <div>
            <Search />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
