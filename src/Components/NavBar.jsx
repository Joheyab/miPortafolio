export function NavBar() {
  return (
    <>
      <header>
        <nav className="flex justify-between px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 backdrop-blur-sm">
          <div>
            <span className="text-2xl text-white">Portafolio</span>
          </div>
          <div>
            <ul className="flex gap-6 text-center items-center">
            <li>
                <a href="#acerca_de_mi">
                  <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#1A936F] via-[#5789da] to-[#88D498]  hover:text-white focus:ring-4 focus:outline-none focus:ring-green-100">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                      Acerca de mi
                    </span>
                  </button>
                </a>
              </li>
              <li>
                <a>
                  <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#1A936F] via-[#5789da] to-[#88D498]  hover:text-white focus:ring-4 focus:outline-none focus:ring-green-100">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                      Skills
                    </span>
                  </button>
                </a>
              </li>
              <li>
                <a>
                  <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#1A936F] via-[#5789da] to-[#88D498]  hover:text-white focus:ring-4 focus:outline-none focus:ring-green-100">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                      Mis proyectos
                    </span>
                  </button>
                </a>
              </li>
              <li>
                <a>
                  <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#1A936F] via-[#5789da] to-[#88D498]  hover:text-white focus:ring-4 focus:outline-none focus:ring-green-100">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                      Contactame
                    </span>
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
