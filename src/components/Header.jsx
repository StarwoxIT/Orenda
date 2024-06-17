import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="p-5 text-center ~text-sm/lg font-body sticky bg-white top-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <img src={Logo} alt="" />
        <nav className="hidden md:block">
          <ul className="flex ~gap-4/12 items-center justify-between">
            {[
              ['Home', '/'],
              ['Our Team', '/'],
              ['Insurance', '/'],
              ['About', '/'],
              ['Privacy Policy', '/'],
              ['Contact Us', '/']
            ].map(([title, url]) => (
              <li
                key={title}
              >
                <a className="cursor-pointer transition block hover:text-orenda-purple hover:font-bold" href={url}>{title}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="hidden md:block text-orenda-purple hover:text-white hover:bg-orenda-purple transition-colors px-4 py-2.5 border border-orenda-purple rounded-3xl font-semibold">
          Book Now
        </button>
      </div>
    </header>
  );
};

export default Header;
