import { NavLink } from 'react-router-dom';
import { House, Clock3, ChartPie } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/', icon: House },
  { name: 'Timeline', path: '/timeline', icon: Clock3 },
  { name: 'Stats', path: '/stats', icon: ChartPie }
];

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Logo" className="w-10 h-10 object-contain" />
          <span className="text-lg font-bold text-gray-800">KeenKeeper</span>
        </div>

        <ul className="flex items-center gap-2">
          {navItems.map(({ name, path, icon: Icon }) => (
            <li key={name}>
              <NavLink
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  `flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#1f5b48] text-white'
                      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                  }`
                }
              >
                <Icon size={16} />
                <span>{name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;